import type { PropsWithChildren } from "react";
import { Card, Spinner } from "../components";

type ListingLayoutItem = {
  imageURL?: string;
  title?: string;
  subtitle?: string;

  // link?: string;
};

type ListingLayoutProps = {
  items: ListingLayoutItem[];
  errorMsg?: string;
  fetching?: boolean;
} & PropsWithChildren;

export function ListingLayout(props: ListingLayoutProps) {
  if (props.errorMsg) {
    alert(props.errorMsg); // todo: use a component like a Toast
  }

  if (props.fetching) {
    return (
      <div className="flex gap-3">
        {/* todo: use a Text component */}
        <Spinner /> <span>Loading...</span>
      </div>
    );
  }

  if (!props.items) return <div>No Data</div>;
  return (
    <div>
      {props.items?.map((item) => (
        <Card
          title={item?.title}
          subtitle={item?.subtitle}
          imageUrl={item?.imageURL}
        />
      ))}
    </div>
  );
}
