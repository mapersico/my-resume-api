import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { SkillsPerApplication } from './skillsPerApplication.entity';
import { Link } from './link.entity';

@Table({
  tableName: 'application',
  timestamps: false,
})
export class Application extends Model<Application> {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  applicationId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  about: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  stack: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  duration: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  lang: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  code: string;

  @HasMany(() => SkillsPerApplication)
  technologies: SkillsPerApplication[];

  @HasMany(() => Link)
  links: Link[];
}
