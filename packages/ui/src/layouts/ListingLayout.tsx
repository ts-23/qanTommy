import type { PropsWithChildren } from "react";
import { Card, Spinner, type CardProps } from "../components";

type ListingLayoutItem = {} & CardProps;
// Using & CardProps is to save time for this assessment. We may want to define the ListingLayout with its own props depending on tradeoffs.
// The Card component needs to be more reusable first. This is an example why design systems need to be so well-designed and detailed because
// it has a large blast radius creating a chain reaction affecting other components, layouts and apps.

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
      <section className="flex gap-3">
        {/* todo: use a Text component */}
        <Spinner /> <span>Loading...</span>
      </section>
    );
  }

  if (!props.items) return <div>No Data</div>;
  return <section>{props.items?.map((item) => <Card {...item} />)}</section>;
}
