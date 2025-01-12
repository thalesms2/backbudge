import { Controller } from '@nestjs/common';
import { ControllerFactory } from 'services/factory/controller.factory';
import { CardService } from './card.service';
import { ICard } from './interface/card.interface';
import { CardDto } from './interface/card.dto';

@Controller('Card')
export class CardController extends ControllerFactory<ICard, CardDto> {
  constructor(readonly service: CardService) {
    super(service);
  }
}
