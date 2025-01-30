import { Rating } from "./Rating";

// This is a very opinioted card simplified for this assessment.
// To build scalable and flexible design system we should make the Card component more minimalist, and use it to build more specialised Cards or components.

export type CardProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  variant?: "horizontal";
};

export function Card({ variant = "horizontal", ...props }: CardProps) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-gray-300"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="flex">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {props.title}
            </div>
            <Rating value={3.5} readOnly />
          </div>

          <p className="text-gray-700 text-base">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
