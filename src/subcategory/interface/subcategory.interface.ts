import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { InterfaceFactory } from '../../../services/factory/interface.factory';
import { ICategory } from '../../category/interface/category.interface';
import { ITransaction } from '../../transaction/interface/transaction.interface';
import { ISchedule } from '../../schedule/interface/schedule.interface';

export class ISubcategory extends InterfaceFactory {
  @IsString()
  @ApiProperty({
    example: 'Hobbie',
    description: 'The subcategory title',
  })
  name: string;
  @ApiProperty({
    example: 'Spends with hobbie',
    description: 'The subcategory description',
  })
  description: string;
  @ApiProperty({
    example: 1,
    description: 'The category id',
  })
  categoryId: number;
  category: ICategory;
  transactions: ITransaction[] | null;
  schedulings: ISchedule[] | null;
}
