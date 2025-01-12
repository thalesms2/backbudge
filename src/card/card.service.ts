import { Injectable } from '@nestjs/common';
import { ServiceFactory } from '../../services/factory/service.factory';
import { PrismaService } from '../../services/prisma/prisma.service';
import { ICard } from './interface/card.interface';

@Injectable()
export class CardService extends ServiceFactory<ICard> {
  constructor(readonly prismaService: PrismaService) {
    super(prismaService, 'card');
  }
}
