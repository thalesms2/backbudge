import { Controller } from '@nestjs/common';
import { ControllerFactory } from 'services/factory/controller.factory';
import { TransactionService } from './transaction.service';
import { ITransaction } from './interface/transaction.interface';
import { TransactionDto } from './interface/transaction.dto';

@Controller('Transaction')
export class TransactionController extends ControllerFactory<
  ITransaction,
  TransactionDto
> {
  constructor(readonly service: TransactionService) {
    super(service);
  }
}
