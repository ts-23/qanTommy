import { type PriceSortKey } from "@repo/constants";

export const getHotels = async (params: { sortBy?: PriceSortKey }) => {
  // in actual app we wil use a routing library to navigate with a query string like ?sortBy
  // then pass the param into the backend API. Here we do it like this to save time configuring
  // a routing system within the 4-5 hour scope.
  return await fetch(
    `${import.meta.env.VITE_HOTELS_API_URL}?sortBy=${params.sortBy}`
  );
};
