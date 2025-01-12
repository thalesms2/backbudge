import { Injectable } from '@nestjs/common';
import { ServiceFactory } from '../../services/factory/service.factory';
import { PrismaService } from '../../services/prisma/prisma.service';
import { ICategory } from './interface/category.interface';

@Injectable()
export class CategoryService extends ServiceFactory<ICategory> {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'Category');
  }
}
