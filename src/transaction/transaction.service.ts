import { Injectable } from '@nestjs/common';
import { ServiceFactory } from 'services/factory/service.factory';
import { PrismaService } from 'services/prisma/prisma.service';
import { ITransaction } from './interface/transaction.interface';

@Injectable()
export class TransactionService extends ServiceFactory<ITransaction> {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'Transaction');
  }
}
