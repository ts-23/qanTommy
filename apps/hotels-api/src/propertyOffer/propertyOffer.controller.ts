import { Controller, Get } from '@nestjs/common';
import { PropertyOfferService } from './propertyOffer.service';

@Controller()
export class PropertyOfferController {
  constructor(private readonly propertyOfferService: PropertyOfferService) {}

  @Get()
  getPropertyOffers(): any {
    return this.propertyOfferService.getPropertyOffers();
  }
}
