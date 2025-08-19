import axios from 'axios';

const API_ROUTE = import.meta.env.VITE_BACKEND_URI + "products";

export const createProduct = async (formData) => {
  console.log(API_ROUTE);
  const response = await axios.post(API_ROUTE, formData);
  return response.data;
};

export const updateProduct = async (id, formData) => {
  const response = await axios.patch(`${API_ROUTE}/${id}`, formData);
  return response.data;
};

export const getProducts = async (filters = {}) => {
  const params = new URLSearchParams(filters).toString();
   const url = params ? `${API_ROUTE}?${params}` : API_ROUTE;
  const response = await axios.get(url);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_ROUTE}/${id}`);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_ROUTE}/${id}`);
  return response.data;
};