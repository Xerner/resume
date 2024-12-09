import { computed, Injectable, signal } from '@angular/core';
import { OCCUPATIONS } from '../data/occupations';
import { IOccupation } from '../models/IOccupation';
import { IOccupationType, OccupationType } from '../models/IOccupationType';
import { OCCUPATION_TYPES } from '../data/occupation-types';
import { JOBS } from '../data/occupation-details';
import { IJob } from '../models/IJob';
import { DateTime, Duration } from 'luxon';
import { LANGUAGES } from '../data/languages';
import { ILanguage } from '../models/ILanguage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  occupations = signal<IOccupation[]>(this.sortOccupationsByParent(OCCUPATIONS));
  occupationTypes = signal<IOccupationType[]>(OCCUPATION_TYPES);
  jobs = signal<IJob[]>(JOBS);
  languages = signal<ILanguage[]>(LANGUAGES);
  totalProfessionalExperience = computed<string>(() => this.getTotalProfessionalExperience());

  filterOccupations(occupationType: IOccupationType) {
    return this.occupations().filter(occupation => occupation.type === occupationType.title);
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

  getLanguage(name: string): ILanguage | null {
    return this.languages().find(language => language.name === name) ?? null;
  }

  private getTotalProfessionalExperience() {
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
    var monthsInYears = Math.ceil(totalExperience.months / 12);
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
}
