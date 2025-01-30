import { Rating } from "./Rating";

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

  extraText?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };

  // offer?: {
  //   title?: string;
  //   currency?: string;
  //   displayPrice?: number;
  //   savingsPrice?: number;
  // };
};

export function Card(props: CardProps) {
  return (
    <div className="flex h-72 pb-6 border-t border-gray-300">
      {/* 1st section */}
      <div
        className="w-72 flex-none bg-gray-300 bg-cover"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>

      {/* 2nd section */}
      <div className="w-64 flex-auto p-6">
        <div className="flex gap-2">
          <div>
            <div className="text-3xl">{props.title}</div>
            <div className="text-base text-gray-500">{props.subtitle}</div>
          </div>
          <Rating className="pt-3" value={props.rating} readOnly />
        </div>
        <div className="text-red-700 pt-8 underline">{props.linkText}</div>
      </div>

      {/* 3rd section */}
      <div className="w-32 flex-none bg-blue-500">
        <div className="text-sm">{props.extraText?.primary}</div>
        <div className="text-3xl">{props.extraText?.secondary}</div>
        <div className="text-text-xl text-red-700">
          {props.extraText?.tertiary}
        </div>
      </div>
    </div>
  );
}
