import { Rating as ManRating } from "@mantine/core";
import { constructString } from "@repo/utils";

export type RatingProps = {
  value?: number;
  readOnly?: boolean;
  className?: string;
  variant?: "star" | "dot"; // renamed 'self' to 'dot' for clarity
};

export const Rating = ({ variant = "star", ...props }: RatingProps) => {
  const DOT_SYMBOLS_CLASS_BASE = `h-3 w-3 mx-0.5 rounded-full`;

  // use a map if variants become large enough
  // strongly typed the map
  const dotSymbols = {
    fullSymbol: (
      <div
        className={constructString(DOT_SYMBOLS_CLASS_BASE, "bg-yellow-500")}
      ></div>
    ),
    emptySymbol: (
      <div
        className={constructString(DOT_SYMBOLS_CLASS_BASE, "bg-gray-300")}
      ></div>
    ),
  };

  return (
    <ManRating
      fractions={2}
      {...(variant === "dot" ? dotSymbols : {})} // fixed conditional spread of dotSymbols
      {...props}
    />
  );
};
