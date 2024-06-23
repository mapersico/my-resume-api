import { Module } from '@nestjs/common';

import { skillProviders } from '../../core/database/providers';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';

@Module({
  providers: [SkillService, ...skillProviders],
  exports: [SkillService],
  controllers: [SkillController],
})
export class SkillModule {}
