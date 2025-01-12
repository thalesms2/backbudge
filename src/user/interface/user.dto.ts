import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @IsString()
  @ApiProperty({
    example: 'user',
    description: 'Username do usuário',
  })
  username: string;

  @IsString()
  @ApiProperty({
    example: 'password',
    description: 'Senha do usuário',
  })
  password: string;
}
