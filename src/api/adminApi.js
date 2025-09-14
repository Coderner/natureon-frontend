import axios from "axios";

const API_ROUTE = import.meta.env.VITE_BACKEND_URI + "admin";

export const adminLogin = async (credentials) => {
  const response = await axios.post(`${API_ROUTE}/login`, credentials);
  return response.data;
};