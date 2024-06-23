import { Inject, Injectable } from '@nestjs/common';

import { APPLICATION_REPOSITORY, FILE_REPOSITORY } from 'src/core/constants';
import { Application } from 'src/core/database/entities/application.entity';
import { File } from 'src/core/database/entities/file.entity';
import { Link } from 'src/core/database/entities/link.entity';
import { Skill } from 'src/core/database/entities/skill.entity';
import { SkillsPerApplication } from 'src/core/database/entities/skillsPerApplication.entity';

@Injectable()
export class ApplicationService {
  constructor(
    @Inject(APPLICATION_REPOSITORY)
    private readonly applicationRepository: typeof Application,
    @Inject(FILE_REPOSITORY)
    private readonly fileRepository: typeof File,
  ) {}

  async getAllApplications(lang: string): Promise<Application[]> {
    const applications = await this.applicationRepository.findAll({
      where: { lang },
      include: [
        {
          model: Link,
          attributes: { exclude: ['applicationId'] },
        },
        {
          model: SkillsPerApplication,
          as: 'technologies',
          attributes: ['skillId'],
          include: [
            {
              model: Skill,
              as: 'skill',
              attributes: ['name', 'color'],
            },
          ],
        },
      ],
    });

    const transformedApplications = applications.map((application) => ({
      ...application.dataValues,
      technologies: application.technologies.map((spp) => spp.skill.dataValues),
    }));

    return transformedApplications as unknown as Application[];
  }

  async getAppByCode(code: string, lang: string): Promise<Application> {
    const application = await this.applicationRepository.findOne<Application>({
      where: { code, lang },
      include: [
        {
          model: Link,
          attributes: { exclude: ['applicationId'] },
        },
        {
          model: SkillsPerApplication,
          as: 'technologies',
          attributes: ['skillId'],
          include: [
            {
              model: Skill,
              as: 'skill',
              attributes: ['name', 'color'],
            },
          ],
        },
      ],
    });

    if (!application) return null;

    const transformedApplication = {
      ...application.dataValues,
      technologies: application.technologies.map((spp) => spp.skill.dataValues),
    };

    return transformedApplication as unknown as Application;
  }

  async getCv(lang: string): Promise<Buffer> {
    const file = await this.fileRepository.findOne({ where: { lang } });
    const base64Content = file.file.split(';base64,').pop();
    const fileBuffer = Buffer.from(base64Content, 'base64');

    return fileBuffer;
  }
}
