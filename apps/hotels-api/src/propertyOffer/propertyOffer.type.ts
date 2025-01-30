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

export type Offer = {
  promotion: {
    title: string;
    type: string;
  };
  name: string;
  displayPrice: {
    amount: number;
    currency: string;
  };
  savings: {
    amount: number;
    currency: string;
  };
  cancellationOption: {
    cancellationType: string;
  };
};

export type PropertyOfferResult = {
  id: string;
  property: Property;
  offer: Offer;
};
