import { Controller } from '@nestjs/common';
import { ControllerFactory } from 'services/factory/controller.factory';
import { ScheduleService } from './schedule.service';
import { ISchedule } from './interface/schedule.interface';
import { ScheduleDto } from './interface/schedule.dto';

@Controller('Schedule')
export class ScheduleController extends ControllerFactory<
  ISchedule,
  ScheduleDto
> {
  constructor(readonly service: ScheduleService) {
    super(service);
  }
}
