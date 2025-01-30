import { PropertyOffer } from "@repo/types";
import { ListingLayout, PrimaryShellLayout } from "@repo/ui/layouts";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { getHotels } from "./apis";
import { formatCurrency, formatSavings } from "./utils";

type FormValues = {
  sortBy: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const query = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      getHotels({ sortBy: watch("sortBy") }).then((res) => res.json()), // can use async await, but this is fine because react query handles the error catching
  });

  return (
    <PrimaryShellLayout logoUrl="/images/qantas-logo.png">
      <div className="flex justify-between">
        <div>{query.data?.results?.length} hotels in Sydney</div>
        {watch("sortBy")}
        <div>
          <label className="text-lg pr-2" htmlFor="sortBy">
            Sort by
          </label>

          <Controller
            name="sortBy"
            control={control}
            render={({ field }) => (
              <select
                id="sortBy"
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  query.refetch();
                }}
              >
                <option value="asc">low-high</option>
                <option value="dsc">high-low</option>
              </select>
            )}
          />
        </div>
      </div>

      <ListingLayout
        items={query.data?.results?.map((x: PropertyOffer) => ({
          title: x?.property?.title,
          subtitle: x?.property?.address?.join(", "),
          notes: x?.offer?.cancellationOption?.cancellationType,
          imageUrl: x?.property?.previewImage?.url,
          imageText: x?.property?.title,
          linkText: x?.offer?.name,
          rating: x?.property?.rating?.ratingValue,
          extraText: {
            // note 1: the BE does not return nights, in real app this is likely dynamic
            // note 2: currency should probably be consistent across savings and display price, unless there is some use case. For simplicity of this assessment, I assumed one.
            primary: `1 night total (${x?.offer?.displayPrice?.currency})`,
            secondary: formatCurrency(x?.offer?.displayPrice?.amount),
            tertiary: formatSavings(x?.offer?.savings?.amount),
          },
        }))}
      />
    </PrimaryShellLayout>
  );
}
