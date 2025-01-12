import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { ControllerFactory } from 'services/factory/controller.factory';
import { IUser } from './interface/user.interface';
import { UserDto } from './interface/user.dto';

@ApiBasicAuth('apiKey')
@ApiTags('User')
@Controller('user')
export class UsersController extends ControllerFactory<IUser, UserDto> {
  constructor(readonly service: UsersService) {
    super(service);
  }
}
