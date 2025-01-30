export const getHotels = async (params: { sortBy?: string }) => {
  return await fetch(`${import.meta.env.VITE_HOTELS_API_URL}?sortBy=${params.sortBy}`);
};
