import { Component } from "@angular/core";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DomSanitizer } from "@angular/platform-browser";
import { DateTime } from "luxon";
import { HeaderComponent } from "../header/header.component";
import { OccupationTypeComponent } from "../occupation-type/occupation-type.component";
import { OccupationComponent } from "../occupation/occupation.component";
import { LetterPageComponent } from "../page/letter-page.component";
import { SkillComponent } from "../skill/skill.component";
import { CommonModule } from "@angular/common";
import { DataService } from "../../services/data.service";
import { JobComponent } from "../job/job.component";
import { SkillLevelComponent } from "../skill-level/skill-level.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LetterPageComponent,
    HeaderComponent,
    OccupationTypeComponent,
    OccupationComponent,
    MatIconModule,
    SkillComponent,
    JobComponent,
    SkillLevelComponent,
    MatTooltipModule,
],
  templateUrl: './app.component.html',
})
export class AppComponent {
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

  ngOnInit(): void {
    // window.addEventListener('resize', this.onResize.bind(this));
    // this.onResize();
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

  onPrint() {
    window.print();
  }
}
