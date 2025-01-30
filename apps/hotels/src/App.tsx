import { PrimaryShellLayout, ListingLayout } from "@repo/ui/layouts";
import { useQuery } from "@tanstack/react-query";
import { getHotels } from "./apis";

export default function App() {
  const query = useQuery({
    queryKey: ["news"],
    queryFn: () => getHotels().then((res) => res.json()), // can use async await, but this is fine because react query handles the error catching
  });

  return (
    <PrimaryShellLayout logoUrl="/images/qantas-logo.png">
      <ListingLayout
        items={query.data?.results?.map((x) => ({
          title: x?.property?.title,
          subtitle: x?.property?.address?.join(", "),
        }))}
      />
    </PrimaryShellLayout>
  );
}
