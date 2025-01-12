import { Controller } from '@nestjs/common';
import { ControllerFactory } from '../../services/factory/controller.factory';
import { AccountService } from './account.service';
import { IAccount } from './interface/account.interface';
import { AccountDto } from './interface/account.dto';

@Controller('account')
export class AccountController extends ControllerFactory<IAccount, AccountDto> {
  constructor(readonly service: AccountService) {
    super(service);
  }
}
