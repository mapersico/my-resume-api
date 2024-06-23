import { Module } from '@nestjs/common';

import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

import { profileProviders } from 'src/core/database/providers/profile.providers';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ...profileProviders],
  exports: [ProfileService],
})
export class ProfileModule {}
