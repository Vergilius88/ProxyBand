import axios from "axios";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface Albums {
  userId: number;
  id: number;
  title: string;
}
export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface UserId {
  userId: number;
}

const baseUrl: string = "https://jsonplaceholder.typicode.com";

axios.interceptors.request.use((config): any => ({
  baseURL: `${baseUrl}`,
  ...config,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}));

export const getUsers = () => axios.get<User[]>("/users");

export const getAlbums = (request: UserId) =>
  axios.get<Albums[]>("/albums", { params: request });

export const getPosts = (request: UserId) =>
  axios.get<Posts[]>("/posts", { params: request });
