import { Controller } from '@nestjs/common';
import { ControllerFactory } from '../../services/factory/controller.factory';
import { LogService } from './log.service';
import { LogDto } from './interface/log.dto';

@Controller('log')
export class LogController extends ControllerFactory<LogDto> {
  constructor(readonly service: LogService) {
    super(service);
  }
}
