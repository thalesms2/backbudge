import { Controller } from '@nestjs/common';
import { ControllerFactory } from '../../services/factory/controller.factory';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryDto } from './interface/subcategory.dto';

@Controller('Subcategory')
export class SubcategoryController extends ControllerFactory<SubcategoryDto> {
  constructor(readonly service: SubcategoryService) {
    super(service);
  }
}
