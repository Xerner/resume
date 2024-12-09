import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IJob } from '../../models/IJob';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './job.component.html',
})
export class JobComponent {
  job = input.required<IJob>();
}
