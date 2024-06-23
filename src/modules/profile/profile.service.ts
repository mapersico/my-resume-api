import { Inject, Injectable } from '@nestjs/common';

import { PROFILE_REPOSITORY } from '../../core/constants';
import {
  Profile,
  Language,
  Education,
  Contact,
} from 'src/core/database/entities';

@Injectable()
export class ProfileService {
  constructor(
    @Inject(PROFILE_REPOSITORY)
    private readonly profileRepository: typeof Profile,
  ) {}

  async getProfileByLanguage(lang: string): Promise<Profile> {
    return await this.profileRepository.findOne({
      where: { lang },
      include: [
        {
          model: Language,
          attributes: { exclude: ['profileId'] },
        },
        {
          model: Education,
          attributes: { exclude: ['profileId'] },
        },
        {
          model: Contact,
          separate: true,
          order: [['order', 'ASC']],
          attributes: { exclude: ['profileId'] },
        },
      ],
    });
  }
}
