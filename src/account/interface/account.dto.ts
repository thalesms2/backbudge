import { IsNumber, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {
  @IsString()
  @ApiProperty({
    example: 'Bradesco Pedro',
    description: 'The name of the account',
  })
  name: string;
  @IsNumber()
  @ApiProperty({
    example: 110.1,
    description: 'The balance of the account',
  })
  balance: number;
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'User owner of the account',
  })
  userId: number;
}
