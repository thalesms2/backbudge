import { IsBoolean, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpReturnDto {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Id do usuário',
  })
  id: number;
  @IsBoolean()
  @ApiProperty({
    example: false,
    description: 'Usuário deletado?',
  })
  deleted: boolean;
}
