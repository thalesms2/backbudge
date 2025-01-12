import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { PrismaService } from 'services/prisma/prisma.service';

@Module({
  providers: [TransactionService, PrismaService],
  controllers: [TransactionController],
  exports: [TransactionService],
})
export class TransactionModule {}
