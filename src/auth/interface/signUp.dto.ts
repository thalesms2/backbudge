import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class SignUpDto {
  @IsString()
  @ApiProperty({
    example: 'user',
    description: 'Nome de usuário',
  })
  username: string;

  @IsString()
  @ApiProperty({
    example: 'password',
    description: 'Senha do usuário',
  })
  password: string;
  role: Role;
}
