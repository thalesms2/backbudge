import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { PrismaService } from 'services/prisma/prisma.service';

@Module({
  providers: [ScheduleService, PrismaService],
  controllers: [ScheduleController],
  exports: [ScheduleService],
})
export class ScheduleModule {}
