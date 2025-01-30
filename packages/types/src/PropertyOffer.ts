import type { Property } from "./Property";
import type { Offer } from "./Offer";

export type PropertyOffer = {
  id: string;
  property: Property;
  offer: Offer;
};
