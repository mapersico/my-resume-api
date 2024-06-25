import { Controller, Get, Headers } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProfileService } from './profile.service';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('get-profile')
  async getProfileByLanguage(@Headers('Language') lang: string) {
    return await this.profileService.getProfileByLanguage(lang);
  }
}
