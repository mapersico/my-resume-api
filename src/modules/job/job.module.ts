import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { jobProviders } from 'src/core/database/providers/job.providers';
import { JobService } from './job.service';

@Module({
  providers: [JobService, ...jobProviders],
  exports: [JobService],
  controllers: [JobController],
})
export class JobModule {}
