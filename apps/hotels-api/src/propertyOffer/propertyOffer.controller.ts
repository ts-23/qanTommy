import { Controller, Get, Query } from '@nestjs/common';
import { PropertyOfferService } from './propertyOffer.service';

@Controller()
export class PropertyOfferController {
  constructor(private readonly propertyOfferService: PropertyOfferService) {}

  @Get()
  getPropertyOffers(@Query('sortBy') sortBy: string): any {
    return this.propertyOfferService.getPropertyOffers(sortBy);
  }
}
