import { Controller } from '@nestjs/common';
import { ControllerFactory } from 'services/factory/controller.factory';
import { SubcategoryService } from './subcategory.service';
import { ISubcategory } from './interface/subcategory.interface';
import { SubcategoryDto } from './interface/subcategory.dto';

@Controller('Subcategory')
export class SubcategoryController extends ControllerFactory<
  ISubcategory,
  SubcategoryDto
> {
  constructor(readonly service: SubcategoryService) {
    super(service);
  }
}
