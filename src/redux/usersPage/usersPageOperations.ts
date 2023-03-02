import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/api";

export const getUsersList = createAsyncThunk("usersList/get", async () => {
  const result = await api.getUsers();
  return result.data;
});

export const getUserAlbumsList = createAsyncThunk(
  "userAlbumList/get",
  async (request: api.UserId) => {
    const result = await api.getAlbums(request);
    return result.data;
  }
);
