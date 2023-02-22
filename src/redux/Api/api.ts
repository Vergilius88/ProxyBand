import axios from "axios";

export {};
const baseUrl: string = "https://jsonplaceholder.typicode.com";

axios.interceptors.request.use((config): any => ({
  baseURL: `${baseUrl}`,
  ...config,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}));

export const getUsers = () => axios.get("/users");