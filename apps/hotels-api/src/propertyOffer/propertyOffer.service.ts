import { Injectable } from '@nestjs/common';
import { type PropertyOffer } from '@repo/types';
import { type PriceSortKey, PRICE_SORT } from '@repo/constants';

import { Data } from '../types';
import { propertyOfferData } from './propertyOffer.data';

@Injectable()
export class PropertyOfferService {
  getPropertyOffers(sortBy?: PriceSortKey): Data<PropertyOffer> {
    const sortedOffers = [...propertyOfferData];

    if (sortBy === PRICE_SORT.DSC) {
      return {
        results: sortedOffers.sort(
          (a, b) =>
            b?.offer?.displayPrice?.amount - a?.offer?.displayPrice?.amount,
        ),
      };
    }

    return {
      results: sortedOffers.sort(
        (a, b) =>
          a?.offer?.displayPrice?.amount - b?.offer?.displayPrice?.amount,
      ),
    };
  }
}
