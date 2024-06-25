import { Controller, Get } from '@nestjs/common';

import { SkillService } from './skill.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('skills')
@Controller('skills')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @Get('get-all')
  async getAll() {
    return await this.skillService.getAll();
  }
}
