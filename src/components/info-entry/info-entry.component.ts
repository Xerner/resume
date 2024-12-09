import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IOccupation } from '../../models/IOccupation';

@Component({
  selector: 'app-info-entry',
  templateUrl: 'info-entry.component.html',
  standalone: true,
  imports: [
    MatIconModule,
  ],
})
export class InfoEntryComponent {
  info = input.required<IOccupation>();
  dateFormat = "MMMM yyyy";
}
