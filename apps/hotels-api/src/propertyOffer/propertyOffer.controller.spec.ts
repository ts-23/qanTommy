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

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(PropertyOfferService);
      expect(appController.getPropertyOffers()).toBe('Hello World!');
    });
  });
});
