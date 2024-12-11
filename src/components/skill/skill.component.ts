import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ISkill } from '../../models/ISkill';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./skill.component.html",
})
export class SkillComponent {
  skill = input<ISkill | null>(null);
  version = input<string>();
  showIcon = input<boolean>(false);
}
