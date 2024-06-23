import { Controller, Get, Param } from '@nestjs/common';

import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('get-profile/:lang')
  async getProfileByLanguage(@Param('lang') lang: string) {
    return await this.profileService.getProfileByLanguage(lang);
  }
}
