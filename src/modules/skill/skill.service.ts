import { Inject, Injectable } from '@nestjs/common';

import { SKILL_REPOSITORY } from '../../core/constants';
import { Skill } from '../../core/database/entities';

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
