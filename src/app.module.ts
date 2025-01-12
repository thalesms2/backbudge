import { Module } from '@nestjs/common';
import { PrismaModule } from 'services/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/user/users.module';
import { AccountModule } from './account/account.module';
import { CardModule } from './card/card.module';
import { CategoryModule } from './category/category.module';
import { ScheduleModule } from './schedule/schedule.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
import { TransactionModule } from './transaction/transaction.module';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    AccountModule,
    CardModule,
    CategoryModule,
    ScheduleModule,
    SubcategoryModule,
    TransactionModule,
    LogModule,
  ],
})
export class AppModule {}
