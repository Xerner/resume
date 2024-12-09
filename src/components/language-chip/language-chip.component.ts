import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { DEFAULT_LANGUAGE_COLOR, LANGUAGES } from '../../data/languages';
import { ILanguage } from '../../models/ILanguage';

@Component({
  selector: 'app-language-chip',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./language-chip.component.html",
})
export class LanguageChipComponent {
  language = input<ILanguage | null>(null);
  version = input<string>();
  color = input<string>("white");
  isSmall = input<boolean>(false);
  backgroundColor = computed<string>(() => {
    var language = this.language();
    if (language == null) {
      return DEFAULT_LANGUAGE_COLOR;
    }
    var color = this.language()!.color;
    if (color) {
      return color;
    }
    return DEFAULT_LANGUAGE_COLOR;
  })
  style = computed<string>(() => {
    return `color: ${this.color()}; background-color: ${this.backgroundColor()}`;
  })
}
