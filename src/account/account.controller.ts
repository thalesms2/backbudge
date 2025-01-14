import { Controller } from '@nestjs/common';
import { ControllerFactory } from '../../services/factory/controller.factory';
import { AccountService } from './account.service';
import { AccountDto } from './interface/account.dto';

@Controller('account')
export class AccountController extends ControllerFactory<AccountDto> {
  constructor(readonly service: AccountService) {
    super(service);
  }
}
