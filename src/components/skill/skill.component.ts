import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ISkill } from '../../models/ISkill';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  templateUrl: "./skill.component.html",
})
export class SkillComponent {
  skill = input<ISkill | null>(null);
  version = input<string>();
}
