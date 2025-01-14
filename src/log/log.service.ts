import { Injectable } from '@nestjs/common';
import { ServiceFactory } from '../../services/factory/service.factory';
import { PrismaService } from '../../services/prisma/prisma.service';
import { Action, Module } from '@prisma/client';

@Injectable()
export class LogService extends ServiceFactory {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'log');
  }

  async createLog(
    action: Action,
    message: string,
    module: Module,
    userId: number,
  ) {
    return await this.prismaService.log.create({
      data: {
        action: action,
        userId: userId,
        module: module,
        message: message,
      },
    });
  }
}
