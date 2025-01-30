import { PrimaryShellLayout, ListingLayout } from "@repo/ui/layouts";
import { useQuery } from "@tanstack/react-query";
import { getHotels } from "./apis";
import { formatSavings } from "./utils";

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
          notes: x?.cancellationOption?.cancellationOption,
          imageUrl: x?.property?.previewImage?.url,
          imageText: x?.property?.title,
          linkText: x?.offer?.name,
          rating: x?.property?.rating?.ratingValue,
          extraText: {
            primary: `1 night total (${x?.offer.currency})`, // the BE does not return nights, in real app this is likely dynamic
            secondary: x?.displayPrice?.amount,
            tertiary: formatSavings(x?.offer?.savings?.amount),
          },
        }))}
      />
    </PrimaryShellLayout>
  );
}
