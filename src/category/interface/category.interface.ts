import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ISubcategory } from 'src/subcategory/interface/subcategory.interface';
import { ITransaction } from 'src/transaction/interface/transaction.interface';
import { ISchedule } from 'src/schedule/interface/schedule.interface';
import { InterfaceFactory } from 'services/factory/interface.factory';

export class ICategory extends InterfaceFactory {
  @IsString()
  @ApiProperty({
    example: 'Comida',
    description: 'Category name',
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: 'Descrição da categoria',
    description: 'Category description',
  })
  description: string;
  subcategories: ISubcategory[] | null;
  transactions: ITransaction[] | null;
  schedulings: ISchedule[] | null;
}
