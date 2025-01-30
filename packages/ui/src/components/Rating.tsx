import { Rating as MRating } from "@mantine/core";

type RatingProps = {
  value?: number;
  readOnly?: boolean;
};

export const Rating = (props: RatingProps) => {
  return <MRating fractions={2} {...props} />;
};
