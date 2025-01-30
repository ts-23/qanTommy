import { Module } from '@nestjs/common';
import { PropertyOfferController, PropertyOfferService } from './propertyOffer';

@Module({
  imports: [],
  controllers: [PropertyOfferController],
  providers: [PropertyOfferService],
})
export class AppModule {}
