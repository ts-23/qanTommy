import { Rating as ManRating } from "@mantine/core";
import { constructString } from "@repo/utils";

export type RatingProps = {
  value?: number;
  readOnly?: boolean;
  className?: string;
  variant?: "star" | "self"; // prefer rename self as dot here, but keeping it the same as backend naming to save assessment time.
};

export const Rating = ({ variant = "star", ...props }: RatingProps) => {
  const DOT_SYMBOLS_CLASS_BASE = `h-3 w-3 mx-0.5 rounded-full`;

  // use a map if variants become large enough
  // todo: strongly type
  let dotSymbols = {
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
      {...(variant === "self" && dotSymbols)}
      {...props}
    />
  );
};
