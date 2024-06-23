import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';

import { databaseConfig } from './database.config';
import { IDatabaseConfigAttributes } from './interfaces/dbConfig.interface';

import { Content } from './entities/content.entity';
import { Skill } from './entities/skill.entity';
import { Job } from './entities/job.entity';
import { Position } from './entities/position.entity';
import { Project } from './entities/project.entity';
import { SkillsPerProject } from './entities/skillsPerProject.entity';
import { Profile } from './entities/profile.entity';
import { Education } from './entities/education.entity';
import { Language } from './entities/language';
import { Contact } from './entities/contact.entity';
import { Application } from './entities/application.entity';
import { SkillsPerApplication } from './entities/skillsPerApplication.entity';
import { Link } from './entities/link.entity';
import { File } from './entities/file.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config: IDatabaseConfigAttributes;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config as SequelizeOptions);
      sequelize.addModels([
        Content,
        Contact,
        Skill,
        Job,
        Position,
        Project,
        SkillsPerProject,
        Profile,
        Education,
        Language,
        Application,
        SkillsPerApplication,
        Link,
        File,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
