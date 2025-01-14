import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ServiceFactory } from '../../services/factory/service.factory';
import { PrismaService } from '../../services/prisma/prisma.service';

@Injectable()
export class AccountService extends ServiceFactory {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'account');
  }
  async create(data) {
    if (await this.validateAccountUser(data.name, data.userId))
      return new HttpException(
        'Account already exists',
        HttpStatus.BAD_REQUEST,
      );
    return await super.create(data);
  }
  async validateAccountUser(name: string, userId: number): Promise<boolean> {
    const result = await this.prismaService.account.findFirst({
      where: {
        name: name,
        userId: userId,
      },
    });
    return result ? true : false;
  }
  async listResumed() {
    return await this.prismaService.account.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }
}
