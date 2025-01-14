import { Injectable } from '@nestjs/common';
import { ServiceFactory } from '../../services/factory/service.factory';
import { PrismaService } from '../../services/prisma/prisma.service';

@Injectable()
export class ScheduleService extends ServiceFactory {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'Schedule');
  }
}
