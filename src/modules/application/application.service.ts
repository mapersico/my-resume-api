import { Inject, Injectable } from '@nestjs/common';

import { APPLICATION_REPOSITORY } from '../../core/constants';
import {
  SkillsPerApplication,
  Skill,
  Link,
  Application,
} from '../../core/database/entities';

@Injectable()
export class ApplicationService {
  constructor(
    @Inject(APPLICATION_REPOSITORY)
    private readonly applicationRepository: typeof Application,
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
}
