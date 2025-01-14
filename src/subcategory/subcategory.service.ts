import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ServiceFactory } from '../../services/factory/service.factory';
import { PrismaService } from '../../services/prisma/prisma.service';

@Injectable()
export class SubcategoryService extends ServiceFactory {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'Subcategory');
  }
  async create(data) {
    if (await this.validateSubcategory(data.name, data.categoryId))
      return new HttpException(
        'Subcategory already exists',
        HttpStatus.BAD_REQUEST,
      );
    return await super.create(data);
  }
  async validateSubcategory(
    name: string,
    categoryId: number,
  ): Promise<boolean> {
    const result = await this.prismaService.subcategory.findFirst({
      where: {
        name: name,
        categoryId: categoryId,
      },
    });
    return result ? true : false;
  }
  async listResumed() {
    return await this.prismaService.subcategory.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }
}
