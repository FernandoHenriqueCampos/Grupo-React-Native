import axios from "axios";

export const BASE_API_URL = process.env.EXPO_PUBLIC_API_URL;
export const BASE_URL_SHOP = process.env.EXPO_PUBLIC_API_BASE_URL_SHOP;
export const BASE_URL_USUARIOS = process.env.EXPO_PUBLIC_API_URL_USUARIOS;
export const USE_MOCK = process.env.EXPO_PUBLIC_USE_MOCK_DATA === "false";

export const apiPets = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
});

export const apiUsuarios = axios.create({
  baseURL: BASE_URL_USUARIOS,
  timeout: 10000,
});

export const apiShop = axios.create({
  baseURL: BASE_URL_SHOP,
  timeout: 10000,
});
