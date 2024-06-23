import { Inject, Injectable } from '@nestjs/common';

import { SKILL_REPOSITORY } from 'src/core/constants';
import { Skill } from 'src/core/database/entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @Inject(SKILL_REPOSITORY)
    private readonly skillRepository: typeof Skill,
  ) {}

  async getAll() {
    return await this.skillRepository.findAll({ order: [['percent', 'DESC']] });
  }
}
