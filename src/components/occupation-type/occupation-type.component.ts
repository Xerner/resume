import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { OccupationType } from '../../models/OccupationType';

@Component({
  selector: 'app-occupation-type',
  templateUrl: 'occupation-type.component.html',
  standalone: true,
  imports: [
    MatIconModule,
  ],
})
export class OccupationTypeComponent {
  occupationType = input.required<OccupationType>();
  icon = input.required<string>();
}
