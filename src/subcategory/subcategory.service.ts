import { Injectable } from '@nestjs/common';
import { ServiceFactory } from 'services/factory/service.factory';
import { PrismaService } from 'services/prisma/prisma.service';
import { ISubcategory } from './interface/subcategory.interface';

@Injectable()
export class SubcategoryService extends ServiceFactory<ISubcategory> {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'Subcategory');
  }
}
