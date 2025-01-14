import { Controller } from '@nestjs/common';
import { ControllerFactory } from '../../services/factory/controller.factory';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './interface/transaction.dto';

@Controller('Transaction')
export class TransactionController extends ControllerFactory<TransactionDto> {
  constructor(readonly service: TransactionService) {
    super(service);
  }
}
