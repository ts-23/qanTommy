import {
  Rating as ManRating,
  type RatingProps as ManRatingProps,
} from "@mantine/core";
import { constructString } from "@repo/utils";

export type RatingProps = {
  value?: number;
  readOnly?: boolean;
  className?: string;
  variant?: "star" | "dot"; // renamed 'self' to 'dot' for clarity
};

export const Rating = ({ variant = "star", ...props }: RatingProps) => {
  const DOT_SYMBOLS_CLASS_BASE = `h-3 w-3 mx-0.5 rounded-full`;

  const baseProps: ManRatingProps = {
    fractions: 2,
    ...props,
  };

  if (variant === "star") return <ManRating {...baseProps} />;

  return (
    <ManRating
      {...baseProps}
      fullSymbol={
        <div
          className={constructString(DOT_SYMBOLS_CLASS_BASE, "bg-yellow-500")}
        ></div>
      }
      emptySymbol={
        <div
          className={constructString(DOT_SYMBOLS_CLASS_BASE, "bg-gray-300")}
        ></div>
      }
    />
  );
};
