import { Component, input } from '@angular/core';
import { SkillComponent } from "../skill/skill.component";
import { DataService } from '../../services/data.service';
import { SkillType } from '../../models/SkillType';
import { CommonModule } from '@angular/common';
import { JobComponent } from "../job/job.component";
import { IOccupation } from '../../models/IOccupation';
import { OccupationComponent } from '../occupation/occupation.component';
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-occupations',
  imports: [
    SkillComponent,
    CommonModule,
    JobComponent,
    OccupationComponent,
    SkillsComponent
],
  templateUrl: './occupations.component.html',
})
export class OccupationsComponent {
  SkillType = SkillType
  occupations = input.required<IOccupation[]>();

  constructor(
    protected dataService: DataService,
  ) { }
}
