import { SkillType } from "./SkillType";

export interface ISkill {
  name: string;
  type: SkillType;
  icon?: string;
  color?: string;
  description?: string;
}
