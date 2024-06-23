import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

import { Language } from './language.entity';
import { Education } from './education.entity';
import { Contact } from './contact.entity';

@Table({
  tableName: 'profile',
  timestamps: false,
})
export class Profile extends Model<Profile> {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  profileId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  contactTitle: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  languagesTitle: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  educationTitle: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  lang: string;

  @HasMany(() => Language)
  languages: Language[];

  @HasMany(() => Education)
  educations: Education[];

  @HasMany(() => Contact)
  contacts: Contact[];
}
