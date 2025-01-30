import { PrimaryShellLayout, ListingLayout } from "@repo/ui/layouts";
import { useQuery } from "@tanstack/react-query";
import { getHotels } from "./apis";

export default function App() {
  const query = useQuery({
    queryKey: ["news"],
    // queryFn: () => getHotels().then((res) => res.json()), // todo can use async await, and handle errors, we can use a Toast component but its a design choice.
    queryFn: () => fetch(`http://localhost:3000/`).then((res) => res.json()), // todo can use async await, and handle errors, we can use a Toast component but its a design choice.
  });

  console.log(query, "query");
  return (
    <PrimaryShellLayout logoUrl="/images/qantas-logo.png">
      <ListingLayout
        items={query.data?.results?.map((x) => ({
          title: x?.property?.title,
          subtitle: x?.property?.address?.join(', '),
        }))}
      />
    </PrimaryShellLayout>
  );
}
