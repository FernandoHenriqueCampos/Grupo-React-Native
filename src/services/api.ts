import axios from "axios";

export const BASE_URL_PETS = process.env.EXPO_PUBLIC_API_BASE_URL_SHOP;
export const BASE_URL_USUARIOS = process.env.EXPO_PUBLIC_API_URL_USUARIOS;
export const USE_MOCK = process.env.EXPO_PUBLIC_USE_MOCK_DATA === "true";

export const apiPets = axios.create({
  baseURL: BASE_URL_PETS,
  timeout: 10000,
});

export const apiUsuarios = axios.create({
  baseURL: BASE_URL_USUARIOS,
  timeout: 10000,
});
