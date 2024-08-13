import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { DEFAULT_COLOR, languageColors } from '../../settings/languageColors';

@Component({
  selector: 'app-language-chip',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./language-chip.component.html",
})
export class LanguageChipComponent {
  language = input.required<keyof typeof languageColors>();
  version = input<string>();
  color = input<string>("white");
  backgroundColor = computed<string>(() => {
    var color = languageColors[this.language()];
    if (color) {
      return color;
    }
    return DEFAULT_COLOR;
  })
  style = computed<string>(() => {
    return `color: ${this.color()}; background-color: ${this.backgroundColor()}`;
  })
}
