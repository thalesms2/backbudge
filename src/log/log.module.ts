import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { LogService } from './log.service';
import { PrismaService } from '../../services/prisma/prisma.service';

@Module({
  providers: [LogService, PrismaService],
  controllers: [LogController],
  exports: [LogService],
})
export class LogModule {}
