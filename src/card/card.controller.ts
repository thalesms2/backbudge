import { Controller } from '@nestjs/common';
import { ControllerFactory } from '../../services/factory/controller.factory';
import { CardService } from './card.service';
import { CardDto } from './interface/card.dto';

@Controller('Card')
export class CardController extends ControllerFactory<CardDto> {
  constructor(readonly service: CardService) {
    super(service);
  }
}
