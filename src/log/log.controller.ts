import { Controller } from '@nestjs/common';
import { ControllerFactory } from '../../services/factory/controller.factory';
import { LogService } from './log.service';
import { ILog } from './interface/log.interface';
import { LogDto } from './interface/log.dto';

@Controller('log')
export class LogController extends ControllerFactory<ILog, LogDto> {
  constructor(readonly service: LogService) {
    super(service);
  }
}
