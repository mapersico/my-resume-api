import { Controller, Get } from '@nestjs/common';

import { SkillService } from './skill.service';

@Controller('skills')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @Get('get-all')
  async getAll() {
    return await this.skillService.getAll();
  }
}
