import { Controller } from '@nestjs/common';
import { ControllerFactory } from '../../services/factory/controller.factory';
import { ScheduleService } from './schedule.service';
import { ScheduleDto } from './interface/schedule.dto';

@Controller('Schedule')
export class ScheduleController extends ControllerFactory<ScheduleDto> {
  constructor(readonly service: ScheduleService) {
    super(service);
  }
}
