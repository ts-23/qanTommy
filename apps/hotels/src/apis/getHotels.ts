export const getHotels = async () => {
  return await fetch(`${import.meta.env.VITE_HOTELS_API_URL}`);
};
