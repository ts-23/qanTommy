import { PrimaryShellLayout, ListingLayout } from "@repo/ui/layouts";
import { PropertyOffer } from "@repo/types";
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
        items={query.data?.results?.map((x: PropertyOffer) => ({
          title: x?.property?.title,
          subtitle: x?.property?.address?.join(", "),
          notes: x?.offer?.cancellationOption,
          imageUrl: x?.property?.previewImage?.url,
          imageText: x?.property?.title,
          linkText: x?.offer?.name,
          rating: x?.property?.rating?.ratingValue,
          extraText: {
            // note 1: the BE does not return nights, in real app this is likely dynamic
            // note 2: currency should probably be consistent across savings and display price, unless there is some use case. For simplicity of this assessment, I assumed one.
            primary: `1 night total (${x?.offer?.displayPrice?.currency})`,
            secondary: x?.offer?.displayPrice?.amount,
            tertiary: formatSavings(x?.offer?.savings?.amount),
          },
        }))}
      />
    </PrimaryShellLayout>
  );
}
