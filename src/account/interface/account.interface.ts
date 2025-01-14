import { IsString, IsDecimal } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { InterfaceFactory } from '../../../services/factory/interface.factory';
import { ITransaction } from '../../transaction/interface/transaction.interface';
import { ISchedule } from '../../schedule/interface/schedule.interface';
import { ICard } from '../../card/interface/card.interface';

export class IAccount extends InterfaceFactory {
  @IsString()
  @ApiProperty({
    example: 'Bradesco Pedro',
    description: 'The name of the account',
  })
  name: string;
  @IsDecimal()
  @ApiProperty({
    example: 100.0,
    description: 'The balance of the account',
  })
  balance: number;
  transactions?: ITransaction[];
  cards?: ICard[];
  schedulings?: ISchedule[];
}
