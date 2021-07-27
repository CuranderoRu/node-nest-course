import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
  @ApiProperty({example: '1', description: 'Unique identifier'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'my@gmail.com', description: 'User email'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({example: '123456789', description: 'User password'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({example: 'true', description: 'Banned indicator'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({example: 'Spam', description: 'Reason for ban'})
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

}