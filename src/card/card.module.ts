import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { PrismaService } from 'services/prisma/prisma.service';

@Module({
  providers: [CardService, PrismaService],
  controllers: [CardController],
  exports: [CardService],
})
export class CardModule {}
