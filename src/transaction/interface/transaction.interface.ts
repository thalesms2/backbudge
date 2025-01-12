import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { InterfaceFactory } from 'services/factory/interface.factory';
import { TransactionType, TransactionStatus } from '@prisma/client';
import { IAccount } from 'src/account/interface/account.interface';
import { ICard } from 'src/card/interface/card.interface';
import { ICategory } from 'src/category/interface/category.interface';
import { ISubcategory } from 'src/subcategory/interface/subcategory.interface';

export class ITransaction extends InterfaceFactory {
  @ApiProperty({
    example: 100.1,
    description: 'Amount of the transaction',
  })
  amount: number;
  type: TransactionType;
  status: TransactionStatus;
  accountId: number | null;
  account: IAccount | null;
  cardId: number | null;
  card: ICard | null;
  duoDate: Date | null;
  @IsString()
  title: string;
  description: string | null;
  categoryId: number | null;
  category: ICategory | null;
  subcategoryId: number | null;
  subcategory: ISubcategory | null;
}
