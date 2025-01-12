import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { PrismaService } from 'services/prisma/prisma.service';

@Module({
  providers: [CategoryService, PrismaService],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
