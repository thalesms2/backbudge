import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ServiceFactory } from '../../services/factory/service.factory';
import { PrismaService } from '../../services/prisma/prisma.service';

@Injectable()
export class CardService extends ServiceFactory {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'card');
  }
  async create(data) {
    if (await this.validateCardUser(data.name, data.userId))
      return new HttpException('Card already exists', HttpStatus.BAD_REQUEST);
    return await super.create(data);
  }
  async validateCardUser(name: string, userId: number): Promise<boolean> {
    const result = await this.prismaService.card.findFirst({
      where: {
        name: name,
        userId: userId,
      },
    });
    return result ? true : false;
  }
  async listResumed() {
    return await this.prismaService.card.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }
}
