import { Component, computed, input } from '@angular/core';

export type SkillLevel = "1" | "2" | "3" | "4"| "5";

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrl: './skill-level.component.scss',
  standalone: true,
})
export class SkillLevelComponent{
  level = input.required<SkillLevel>()
  protected levelArr = computed(() => {
    var level = parseInt(this.level())
    var arr = Array(5).fill(0)
    arr.forEach((_, i) => {
      if (i < level) {
        arr[i] = 1
      }
    })
    return arr;
  })
}
