import { JOB_REPOSITORY } from 'src/core/constants';
import { Job } from '../entities/job.entity';

export const jobProviders = [
  {
    provide: JOB_REPOSITORY,
    useValue: Job,
  },
];
