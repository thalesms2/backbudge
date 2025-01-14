import { Injectable } from '@nestjs/common';
import { ServiceFactory } from '../../services/factory/service.factory';
import { PrismaService } from '../../services/prisma/prisma.service';

@Injectable()
export class TransactionService extends ServiceFactory {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'Transaction');
  }
  async totals() {
    this.prismaService.transaction.groupBy({
      by: ['status'],
      _sum: {
        amount: true,
      },
    });
  }
}
