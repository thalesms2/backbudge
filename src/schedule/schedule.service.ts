import { Injectable } from '@nestjs/common';
import { ServiceFactory } from '../../services/factory/service.factory';
import { PrismaService } from '../../services/prisma/prisma.service';
import { ISchedule } from './interface/schedule.interface';

@Injectable()
export class ScheduleService extends ServiceFactory<ISchedule> {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'Schedule');
  }
}
