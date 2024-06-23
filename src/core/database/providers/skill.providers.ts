import { SKILL_REPOSITORY } from 'src/core/constants';
import { Skill } from '../entities/skill.entity';

export const skillProviders = [
  {
    provide: SKILL_REPOSITORY,
    useValue: Skill,
  },
];
