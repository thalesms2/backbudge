import { Controller } from '@nestjs/common';
import { ControllerFactory } from '../../services/factory/controller.factory';
import { CategoryService } from './category.service';
import { CategoryDto } from './interface/category.dto';

@Controller('Category')
export class CategoryController extends ControllerFactory<CategoryDto> {
  constructor(readonly service: CategoryService) {
    super(service);
  }
}
