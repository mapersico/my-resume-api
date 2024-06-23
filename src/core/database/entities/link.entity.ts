import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Application } from './application.entity';

@Table({
  tableName: 'link',
  timestamps: false,
})
export class Link extends Model<Link> {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  linkId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  caption: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  url: string;

  @ForeignKey(() => Application)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  applicationId: string;
}
