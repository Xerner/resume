import { computed, Injectable, signal } from '@angular/core';
import { OCCUPATIONS } from '../data/occupations';
import { IOccupation } from '../models/IOccupation';
import { JOBS } from '../data/jobs';
import { IJob } from '../models/IJob';
import { DateTime, Duration } from 'luxon';
import { SKILLS } from '../data/skills';
import { ISkill } from '../models/ISkill';
import { IJobSkill } from '../models/IOccupationLanguage';
import { JOB_SKILLS } from '../data/job-skills';
import { SkillType } from '../models/SkillType';
import { OccupationType } from '../models/OccupationType';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  occupations = signal<IOccupation[]>(this.sortOccupationsByParent(OCCUPATIONS));
  jobs = signal<IJob[]>(JOBS);
  skills = signal<ISkill[]>(SKILLS);
  jobSkills = signal<IJobSkill[]>(JOB_SKILLS);
  totalProfessionalExperience = computed<string>(() => this.getTotalProfessionalExperience());

  filterOccupations(occupationType: OccupationType) {
    return this.occupations().filter(occupation => occupation.type === occupationType);
  }

  filterJobs(occupation: IOccupation) {
    return this.jobs().filter(job => job.occupationId === occupation.id);
  }

  sortOccupationsByParent(occupations: IOccupation[]) {
    return occupations.sort((a, b) => {
      if (a.parentId === b.id) {
        return 1;
      }
      if (b.parentId === a.id) {
        return -1;
      }
      return 0;
    });
  }

  hasParent(occupation: IOccupation) {
    return typeof occupation.parentId === "string";
  }

  hasChildren(occupation: IOccupation) {
    return this.occupations().some(o => o.parentId === occupation.id);
  }

  getSkill(name: string): ISkill | null {
    return this.skills().find(language => language.name === name) ?? null;
  }

  private getTotalProfessionalExperience(): string {
    var totalExperience = this.occupations()
      .filter(occupation => occupation.type === OccupationType.Employment)
      .reduce((accumulator: Duration, occupation: IOccupation) => {
        if (this.hasChildren(occupation)) {
          return accumulator;
        }
        var endDate = occupation.endDate ?? DateTime.now();
        var diff = endDate.diff(occupation.startDate ?? DateTime.now(), ['years', 'months']);
        if (accumulator === undefined) {
          return diff
        }
        return accumulator.plus(diff);
      }, undefined as unknown as Duration);
      // TODO: change
    var monthsInYears = totalExperience.months / 12;
    totalExperience = totalExperience.plus({ years: monthsInYears });
    totalExperience = totalExperience.minus({ months: totalExperience.months });
    return this.formatDuration(totalExperience);
  }

  formatDuration(duration: Duration) {
    var months = Math.round(duration.months);
    var years = Math.floor(duration.years);
    var yearsText = duration.years === 1 ? "year" : "years";
    var monthsText = duration.months === 1 ? "month" : "months";
    var str = [];
    if (years > 0) {
      str.push(`${years} ${yearsText}`);
    }
    if (months > 0) {
      str.push(`${months} ${monthsText}`);
    }
    return str.join(" ");
  }

  filterSkills(job: IJob) {
    var skills = this.jobSkills().filter(skill => skill.jobId === job.id);
    return this.skills().filter(skill => skills.some(s => s.skillId === skill.name));
  }

  getSkillsForOccupation(occupation: IOccupation, type: SkillType) {
    var jobs = this.filterJobs(occupation);
    var skills = jobs
      .map(job => this.filterSkills(job))
      .flat()
      .filter(skill => skill.type === type)
      .reduce((accumulator: ISkill[], skill) => accumulator.some(s => s.name === skill.name) ? accumulator : [...accumulator, skill], [])
      .sort((a, b) => a.name.localeCompare(b.name));
    return skills;
  }

  getAllSkillsOfType(type: SkillType) {
    var skills = this.jobSkills()
      .map(skill => this.getSkill(skill.skillId))
      .filter(skill => skill !== null)
      .filter(skill => skill.type === type)
      .reduce((accumulator: ISkill[], skill) => accumulator.some(s => s.name === skill.name) ? accumulator : [...accumulator, skill], [])
      .sort((a, b) => a.name.localeCompare(b.name));
    return skills;
  }
}
