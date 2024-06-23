import { Module } from '@nestjs/common';

import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { applicationProviders } from '../../core/database/providers';

@Module({
  controllers: [ApplicationController],
  providers: [ApplicationService, ...applicationProviders],
  exports: [ApplicationService],
})
export class ApplicationModule {}
