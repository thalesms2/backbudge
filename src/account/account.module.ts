import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { PrismaService } from 'services/prisma/prisma.service';

@Module({
  providers: [AccountService, PrismaService],
  controllers: [AccountController],
  exports: [AccountService],
})
export class AccountModule {}
