import { Component, HostBinding } from "@angular/core";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { DateTime } from "luxon";
import { HeaderComponent } from "../header/header.component";
import { InfoBlockComponent } from "../info-block/info-block.component";
import { InfoEntryComponent } from "../info-entry/info-entry.component";
import { LetterPageComponent } from "../page/letter-page.component";
import { SkillComponent } from "../skill/skill.component";
import { LanguageChipComponent } from "../language-chip/language-chip.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LetterPageComponent,
    HeaderComponent,
    InfoBlockComponent,
    InfoEntryComponent,
    MatIconModule,
    SkillComponent,
    LanguageChipComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular';
  DateTime = DateTime;

  constructor(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
  ) {
    matIconRegistry.addSvgIcon(
      'linkedin',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/linkedin.svg')
    );
    matIconRegistry.addSvgIcon(
      'github',
      domSanitizer.bypassSecurityTrustResourceUrl('assets/github.svg')
    );
  }

  onResize() {

  }

  onPrint() {
    window.print();
  }
}
