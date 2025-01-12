import { Controller } from '@nestjs/common';
import { ControllerFactory } from '../../services/factory/controller.factory';
import { CategoryService } from './category.service';
import { ICategory } from './interface/category.interface';
import { CategoryDto } from './interface/category.dto';

@Controller('Category')
export class CategoryController extends ControllerFactory<
  ICategory,
  CategoryDto
> {
  constructor(readonly service: CategoryService) {
    super(service);
  }
}
