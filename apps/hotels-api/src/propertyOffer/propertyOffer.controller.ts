import { Controller, Get, Query } from '@nestjs/common';
import { type PriceSortKey } from '@repo/constants';
import { PropertyOfferService } from './propertyOffer.service';

@Controller()
export class PropertyOfferController {
  constructor(private readonly propertyOfferService: PropertyOfferService) {}

  @Get()
  getPropertyOffers(@Query('sortBy') sortBy: PriceSortKey) {
    return this.propertyOfferService.getPropertyOffers(sortBy);
  }
}
