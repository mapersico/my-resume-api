import { Inject, Injectable } from '@nestjs/common';

import { JOB_REPOSITORY } from '../../core/constants';
import {
  SkillsPerProject,
  Skill,
  Project,
  Position,
  Job,
} from 'src/core/database/entities';

@Injectable()
export class JobService {
  constructor(
    @Inject(JOB_REPOSITORY) private readonly jobRepository: typeof Job,
  ) {}

  async getAllJobs(lang: string): Promise<Job[]> {
    const jobs = await this.jobRepository.findAll({
      where: { lang },
      include: [
        {
          model: Position,
          as: 'positions',
          separate: true,
          order: [['order', 'ASC']],
          attributes: {
            exclude: ['jobId'],
          },
          include: [
            {
              model: Project,
              as: 'projects',
              separate: true,
              order: [['order', 'ASC']],
              attributes: {
                exclude: ['positionId'],
              },
              include: [
                {
                  model: SkillsPerProject,
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
            },
          ],
        },
      ],
    });

    const transformedJobs = jobs.map((job) => ({
      ...job.dataValues,
      positions: job.positions.map((position) => ({
        ...position.dataValues,
        projects: position.projects.map((project) => ({
          ...project.dataValues,
          technologies: project.technologies.map((spp) => spp.skill.dataValues),
        })),
      })),
    }));

    return transformedJobs as unknown as Job[];
  }

  async getByJobCode(code: string, lang: string): Promise<Job | null> {
    const job = await this.jobRepository.findOne({
      where: { code, lang },
      include: [
        {
          model: Position,
          as: 'positions',
          separate: true,
          order: [['order', 'ASC']],
          attributes: {
            exclude: ['jobId'],
          },
          include: [
            {
              model: Project,
              as: 'projects',
              separate: true,
              order: [['order', 'ASC']],
              attributes: {
                exclude: ['positionId'],
              },
              include: [
                {
                  model: SkillsPerProject,
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
            },
          ],
        },
      ],
    });

    if (!job) return null;

    const transformedJobs = {
      ...job.dataValues,
      positions: job.positions.map((position) => ({
        ...position.dataValues,
        projects: position.projects.map((project) => ({
          ...project.dataValues,
          technologies: project.technologies.map((spp) => spp.skill.dataValues),
        })),
      })),
    };

    return transformedJobs as unknown as Job;
  }
}
