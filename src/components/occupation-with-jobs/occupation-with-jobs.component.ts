import { Component, input } from '@angular/core';
import { IOccupation } from '../../models/IOccupation';
import { SkillType } from '../../models/SkillType';
import { DataService } from '../../services/data.service';
import { OccupationComponent } from '../occupation/occupation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-occupation-with-jobs',
  imports: [
      CommonModule,
      OccupationComponent,
  ],
  templateUrl: './occupation-with-jobs.component.html',
})
export class AppOccupationWithJobsComponent {
    SkillType = SkillType
    occupation = input.required<IOccupation>();

    constructor(
        protected dataService: DataService,
    ) { }
}
