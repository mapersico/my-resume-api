import { Module } from '@nestjs/common';

import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';

import { applicationProviders } from 'src/core/database/providers/application.providers';
import { fileProviders } from 'src/core/database/providers/file.providers';

@Module({
  controllers: [ApplicationController],
  providers: [ApplicationService, ...applicationProviders, ...fileProviders],
  exports: [ApplicationService],
})
export class ApplicationModule {}
