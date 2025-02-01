import { Test, TestingModule } from '@nestjs/testing';
import { PropertyOfferController } from './propertyOffer.controller';
import { PropertyOfferService } from './propertyOffer.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PropertyOfferController],
      providers: [PropertyOfferService],
    }).compile();
  });

  describe('getHotels', () => {
    // we would mock the data if the API is pulling dynamic data source
    it('should return default results', () => {
      const appController = app.get(PropertyOfferService);
      expect(appController.getPropertyOffers()).toMatchSnapshot();
    });
  });
});
