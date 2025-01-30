import { Rating as MRating } from "@mantine/core";

type RatingProps = {
  value?: number;
  readOnly?: boolean;
  variant?: "star" | "dot";
};

export const Rating = ({ variant = "star", ...props }: RatingProps) => {
  // use a map if variants become large enough
  // todo: strongly type
  let dotSymbols = {
    fullSymbol: (
      <div className="h-4 w-4 mx-0.5 rounded-full bg-yellow-500"></div>
    ),
    emptySymbol: (
      <div className="h-4 w-4 mx-0.5 rounded-full bg-gray-300"></div>
    ),
  };

  return (
    <MRating fractions={2} {...(variant === "dot" && dotSymbols)} {...props} />
  );
};
