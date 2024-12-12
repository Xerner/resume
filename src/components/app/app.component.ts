import { Component } from "@angular/core";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DomSanitizer } from "@angular/platform-browser";
import { DateTime } from "luxon";
import { HeaderComponent } from "../header/header.component";
import { OccupationTypeComponent } from "../occupation-type/occupation-type.component";
import { LetterPageComponent } from "../page/letter-page.component";
import { SkillComponent } from "../skill/skill.component";
import { CommonModule } from "@angular/common";
import { DataService } from "../../services/data.service";
import { PrintButtonComponent } from "../print-button/print-button.component";
import { SkillType } from "../../models/SkillType";
import { OccupationType } from "../../models/OccupationType";
import { OccupationsComponent } from "../occupations/occupations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LetterPageComponent,
    HeaderComponent,
    OccupationTypeComponent,
    MatIconModule,
    SkillComponent,
    MatTooltipModule,
    PrintButtonComponent,
    OccupationsComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  SkillType = SkillType;
  OccupationType = OccupationType;
  title = 'angular';
  DateTime = DateTime;
  readonly PAGE_ASPECT_RATIO = 8 / 11.5;

  constructor(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
    protected dataService: DataService,
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
    var pages = document.getElementsByClassName('letter-page');
    var aspectRatio = this.PAGE_ASPECT_RATIO;
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i] as HTMLElement;
      var pageWidth = page.offsetWidth;
      page.style.height = `${pageWidth / aspectRatio}px`;
    }
  }
}
