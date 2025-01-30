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
