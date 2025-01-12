import { IsDate, IsDecimal, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ITransaction } from 'src/transaction/interface/transaction.interface';
import { IAccount } from 'src/account/interface/account.interface';
import { ISchedule } from 'src/schedule/interface/schedule.interface';
import { InterfaceFactory } from 'services/factory/interface.factory';

export class ICard extends InterfaceFactory {
  @IsString()
  @ApiProperty({
    example: 'Nubank Pedro',
    description: 'The card title',
  })
  name: string;
  @IsDate()
  @ApiProperty({
    example: new Date(),
    description: 'Expiration date',
  })
  expDate: Date;
  @IsDecimal()
  @ApiProperty({
    example: 100.0,
    description: 'The limit of the card',
  })
  limit: number;
  @IsInt()
  @ApiProperty({
    example: 1,
    description: 'Account id',
  })
  accountId: number;
  account: IAccount;
  transactions: ITransaction[] | null;
  schedulings: ISchedule[] | null;
}
