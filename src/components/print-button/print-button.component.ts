import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-print-button',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  templateUrl: './print-button.component.html',
})
export class PrintButtonComponent {
  onPrint() {
    window.print();
  }
}
