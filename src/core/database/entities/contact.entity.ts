import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Profile } from './profile.entity';

@Table({
  tableName: 'contact',
  timestamps: false,
})
export class Contact extends Model<Contact> {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  contactId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  icon: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order: number;

  @ForeignKey(() => Profile)
  @Column({
    type: DataType.UUIDV4,
    allowNull: false,
  })
  profileId: string;
}
