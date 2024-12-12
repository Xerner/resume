import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ISkill } from '../../models/ISkill';
import { SkillComponent } from "../skill/skill.component";

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule,
    SkillComponent
],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  title = input.required<string>();
  skills = input.required<ISkill[]>();
}
