import { Rating, type RatingProps } from "./Rating";

// This is a very opinioted card simplified for this assessment.
// To build scalable and flexible design system we should make a minimalist reusable Card component,
// and use it to build more specialised components

export type CardProps = {
  title?: string;
  subtitle?: string;
  notes?: string;

  imageUrl?: string;
  imageText?: string;
  linkText?: string;
  rating?: number; // rating does really fit into a Card component, but given the time limit of this assessment. It has been simplified.
  ratingType?: RatingProps["variant"]; // same as above, only to save time. We should not couple Rating and Card together, we may want a more specialised Card like OfferCard instead.

  extraText?: {
    highlight?: string;
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
};

export function Card(props: CardProps) {
  return (
    <div className="flex h-72 relative">
      <div className="max-h-12 left-3 top-7 bg-white text-red-500 absolute border border-gray-300 font-bold flex p-2">
        {props.extraText?.highlight}
      </div>

      {/* Group 1*/}
      <div
        className="w-72 flex-none bg-gray-300 bg-cover m-3"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      />

      {/* Group 2*/}
      <div className="flex flex-grow justify-between p-6 border-t border-gray-300">
        {/* Group 2.1*/}
        <div className="flex flex-col justify-between">
          <div className="flex gap-2">
            <div>
              <div className="text-3xl font-bold">{props.title}</div>
              <div className="text-base text-gray-500">{props.subtitle}</div>
            </div>
            <Rating
              className="pt-3"
              readOnly
              value={props.rating}
              variant={props.ratingType}
            />
          </div>
          <div className="text-red-700 mb-16 text-base underline">
            {props.linkText}
          </div>

          <div className="text-green-700 text-base align-bottom">
            {props.notes}
          </div>
        </div>

        {/* Group 2.2*/}
        <div className="flex flex-col justify-end items-end">
          <div className="text-sm">{props.extraText?.primary}</div>
          <div className="text-3xl font-bold">{props.extraText?.secondary}</div>
          <div className="text-text-xl text-red-700">
            {props.extraText?.tertiary}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
