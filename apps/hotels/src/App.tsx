import { type PropertyOffer } from "@repo/types";
import { type PriceSortKey, PRICE_SORT } from "@repo/constants";
import { ListingLayout, PrimaryShellLayout } from "@repo/ui/layouts";
import { startCase } from "@repo/utils";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { getHotels } from "./apis";
import { formatCurrency, formatSavings } from "./utils";

type FormValues = {
  sortBy: PriceSortKey;
};

export default function App() {
  const { watch, control } = useForm<FormValues>();

  const query = useQuery({
    queryKey: ["getHotels"],
    queryFn: () =>
      // Ideally we should use a routing library like tanstack router to set the query string like http://localhost:5173?sortBy=foobar
      // I have done it this way to save time configuring a router library to avoid going beyond the 4-5 hour scope for this assessment.
      getHotels({ sortBy: watch("sortBy") }).then((res) => res.json()), // can use async await
  });

  return (
    <PrimaryShellLayout logoUrl="/images/qantas-logo.png">
      {/* todo: ideally this should be part of some layout such as the ListingLayout */}
      <div className="flex justify-between">
        <div className="pl-3">
          {query.data?.results?.length}{" "}
          <span className="italic">hotels in </span>
          <span className="font-bold">Sydney</span>
        </div>
        <div>
          <label className="text-lg pr-2 cursor-pointer" htmlFor="sortBy">
            Sort by
          </label>

          <Controller
            name="sortBy"
            control={control}
            render={({ field }) => (
              <select
                id="sortBy"
                className="cursor-pointer"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  query.refetch();
                }}
              >
                <option value={PRICE_SORT.ASC}>low-high</option>
                <option value={PRICE_SORT.DSC}>high-low</option>
              </select>
            )}
          />
        </div>
      </div>

      <ListingLayout
        items={query.data?.results?.map((x: PropertyOffer) => ({
          id: x?.id,
          // We can use mappers here in a separate package or folder if our project gets larger.
          // BE-FE types should match and be reused as much as possible.
          // It is not always the case with companies having FE and BE as separate teams with their own conventions.
          // Further, design system components and layouts should be reusable without moulding them to fit BE APIs.
          title: x?.property?.title,
          subtitle: x?.property?.address?.join(", "),
          notes: startCase(x?.offer?.cancellationOption?.cancellationType),
          imageUrl: x?.property?.previewImage?.url,
          imageText: x?.property?.title,
          linkText: x?.offer?.name,
          rating: x?.property?.rating?.ratingValue,
          ratingType: x?.property?.rating?.ratingType,
          extraText: {
            // note 1: the BE does not return nights, in real app this is likely dynamic
            // note 2: currency should probably be consistent across savings and display price, unless there is some use case. For simplicity of this assessment, I assumed one.
            primary: `1 night total (${x?.offer?.displayPrice?.currency})`,
            secondary: formatCurrency(x?.offer?.displayPrice?.amount),
            tertiary: formatSavings(x?.offer?.savings?.amount),
            highlight: x?.offer?.promotion.title,
          },
        }))}
      />
    </PrimaryShellLayout>
  );
}
