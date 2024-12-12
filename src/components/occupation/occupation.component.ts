import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IOccupation } from '../../models/IOccupation';
import { CommonModule } from '@angular/common';
import { DateTime } from 'luxon';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-occupation',
  templateUrl: 'occupation.component.html',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
  ],
})
export class OccupationComponent {
  occupation = input.required<IOccupation>();
  hasParent = computed(() => typeof this.occupation().parentId === "string");
  duration = computed(() => this.getDurationAtOccupation());
  dateFormat = "MMM yyyy";

  constructor(
    private dataService: DataService,
  ) { }

  getDurationAtOccupation() {
    const startDate = this.occupation().startDate;
    let endDate = this.occupation().endDate;
    if (startDate === undefined) {
      return "";
    }
    if (endDate === undefined) {
      endDate = DateTime.now();
    }
    const duration = endDate.diff(startDate, ['years', 'months']);
    return this.dataService.formatDuration(duration);
  }

  hasSlash(str: string) {
    return str.includes("/");
  }
}
