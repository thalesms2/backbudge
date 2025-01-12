import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { InterfaceFactory } from 'services/factory/interface.factory';
import { ILog } from 'src/log/interface/log.interface';
import { IAccount } from 'src/account/interface/account.interface';
import { ICard } from 'src/card/interface/card.interface';
import { ICategory } from 'src/category/interface/category.interface';
import { ISchedule } from 'src/schedule/interface/schedule.interface';
import { ISubcategory } from 'src/subcategory/interface/subcategory.interface';
import { ITransaction } from 'src/transaction/interface/transaction.interface';

export class IUser extends InterfaceFactory {
  @IsString()
  @ApiProperty({
    example: 'pedro123',
    description: 'Username of the user',
  })
  username: string;
  password: string;
  role: Role;
  logs: ILog[] | null;
  accounts: IAccount[] | null;
  cards: ICard[] | null;
  transactions: ITransaction[] | null;
  categories: ICategory[] | null;
  subcategories: ISubcategory[] | null;
  schedulings: ISchedule[] | null;
}
