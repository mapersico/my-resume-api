import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '../database/database.module';

import { SkillModule } from 'src/modules/skill/skill.module';
import { JobModule } from 'src/modules/job/job.module';
import { ContentModule } from 'src/modules/content/content.module';
import { ProfileModule } from 'src/modules/profile/profile.module';
import { ApplicationModule } from 'src/modules/application/application.module';
import { FileModule } from 'src/modules/file/file.module';
import { ContactModule } from 'src/modules/contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ContentModule,
    SkillModule,
    JobModule,
    DatabaseModule,
    ProfileModule,
    ApplicationModule,
    FileModule,
    ContactModule,
  ],
  providers: [],
})
export class AppModule {}
