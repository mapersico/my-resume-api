import { Inject, Injectable } from '@nestjs/common';

import { PROFILE_REPOSITORY } from 'src/core/constants';
import { Contact } from 'src/core/database/entities/contact.entity';
import { Education } from 'src/core/database/entities/education.entity';
import { Language } from 'src/core/database/entities/language';
import { Profile } from 'src/core/database/entities/profile.entity';

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
