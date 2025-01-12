import { Injectable } from '@nestjs/common';
import { ServiceFactory } from 'services/factory/service.factory';
import { PrismaService } from 'services/prisma/prisma.service';
import { ILog } from './interface/log.interface';

@Injectable()
export class LogService extends ServiceFactory<ILog> {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'log');
  }
}
