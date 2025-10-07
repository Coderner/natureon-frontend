import axios from "axios";

const API_ROUTE = import.meta.env.VITE_BACKEND_URI + "orders";

// Create a new order (checkout)
export const createOrder = async (orderData) => {
  const response = await axios.post(API_ROUTE, orderData);
  return response.data;
};