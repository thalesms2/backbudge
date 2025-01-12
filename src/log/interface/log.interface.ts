import { IsDate, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IUser } from 'src/user/interface/user.interface';
import { Action } from '@prisma/client';

export class ILog {
  @IsInt()
  id: number;
  @IsString()
  @ApiProperty({
    example: 'info',
    description: 'Message',
  })
  message: string;
  @IsInt()
  userId: number;
  user?: IUser;
  action: Action;
  @IsDate()
  createdAt: Date;
}
