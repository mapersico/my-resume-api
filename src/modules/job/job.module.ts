import { Module } from '@nestjs/common';

import { JobController } from './job.controller';
import { jobProviders } from '../../core/database/providers';
import { JobService } from './job.service';

@Module({
  providers: [JobService, ...jobProviders],
  exports: [JobService],
  controllers: [JobController],
})
export class JobModule {}
