import {
  IsNumber,
  IsDate,
  IsBoolean,
  IsNotEmptyObject,
  IsInt,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../../src/user/interface/user.interface';

export class InterfaceFactory {
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'Unique id',
  })
  id: number;
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'User id that created/owner',
  })
  userId: number;
  @IsNotEmptyObject()
  user?: IUser;
  @IsDate()
  @ApiProperty({
    example: new Date(),
    description: 'Date of creation',
  })
  createdAt: Date;
  @IsDate()
  @ApiProperty({
    example: new Date(),
    description: 'Date of update',
  })
  updatedAt: Date;
  @IsDate()
  @ApiProperty({
    example: new Date(),
    description: 'Date of deletion',
  })
  deletedAt: Date | null;
  @IsBoolean()
  @ApiProperty({
    example: false,
    description: 'Is it deleted?',
  })
  deleted: boolean;
}
