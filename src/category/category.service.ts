import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ServiceFactory } from '../../services/factory/service.factory';
import { PrismaService } from '../../services/prisma/prisma.service';

@Injectable()
export class CategoryService extends ServiceFactory {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'Category');
  }
  async create(data) {
    if (await this.validateCategory(data.name))
      return new HttpException(
        'Category already exists',
        HttpStatus.BAD_REQUEST,
      );
    return await super.create(data);
  }
  async validateCategory(name: string): Promise<boolean> {
    const result = await this.prismaService.category.findFirst({
      where: {
        name: name,
      },
    });
    return result ? true : false;
  }
  async listResumed() {
    return await this.prismaService.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }
}
