import { Module } from '@nestjs/common';
import { SubcategoryController } from './subcategory.controller';
import { SubcategoryService } from './subcategory.service';
import { PrismaService } from '../../services/prisma/prisma.service';

@Module({
  providers: [SubcategoryService, PrismaService],
  controllers: [SubcategoryController],
  exports: [SubcategoryService],
})
export class SubcategoryModule {}
