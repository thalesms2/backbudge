import { Injectable } from '@nestjs/common';
import { ServiceFactory } from 'services/factory/service.factory';
import { PrismaService } from 'services/prisma/prisma.service';
import { IAccount } from './interface/account.interface';

@Injectable()
export class AccountService extends ServiceFactory<IAccount> {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'account');
  }
}
