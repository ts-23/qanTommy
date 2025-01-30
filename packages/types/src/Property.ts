export type Property = {
  propertyId: string;
  title: string;
  address: [string, string];
  previewImage: {
    url: string;
    caption: string;
    imageType: string;
  };
  rating: {
    ratingValue: number;
    ratingType: string;
  };
};

export type PropertyOffer = {
  id: string;
  property: Property;
  offer: Offer;
};
