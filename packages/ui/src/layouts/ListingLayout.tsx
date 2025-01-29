import type { PropsWithChildren } from "react";
import { Card } from "../components";

type ListingLayoutItem = {
  imageURL?: string;
  title?: string;
  subtitle?: string;
  // link?: string;
};

type ListingLayoutProps = { items: ListingLayoutItem[] } & PropsWithChildren;

export function ListingLayout(props: ListingLayoutProps) {
  return (
    // <div className="flex h-32">
    //   <div className="bg-red-700 max-w-2xs flex-1">01</div>
    //   <div className="bg-green-700 flex-1">2</div>
    // </div>
    <div>
      {props.items.map((item) => (
        <Card
          title={item.title}
          subtitle={item.subtitle}
          imageUrl={item.imageURL}
        />
      ))}
    </div>
  );
}
