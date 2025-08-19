import axios from 'axios';

const API_ROUTE = import.meta.env.VITE_BACKEND_URI + "categories";

export const getCategories = async () => {
  const response = await axios.get(API_ROUTE);
  return response.data;
};