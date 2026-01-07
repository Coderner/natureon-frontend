import axios from 'axios';

const API_ROUTE = import.meta.env.VITE_BACKEND_URI + "auth";

export const login = async (credentials) => {
  const response = await axios.post(API_ROUTE+"/login", credentials);
  return response.data;
};

export const signup = async (credentials) => {
  const response = await axios.post(API_ROUTE+"/signup", credentials);
  return response.data;
};