import { Component, input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SkillType } from '../../models/SkillType';
import { CommonModule } from '@angular/common';
import { IOccupation } from '../../models/IOccupation';
import { OccupationComponent } from '../occupation/occupation.component';

@Component({
  selector: 'app-occupations',
  imports: [
    CommonModule,
    OccupationComponent,
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
