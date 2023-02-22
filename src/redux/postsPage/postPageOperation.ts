import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../Api/api";

export const getUserPostList = createAsyncThunk("userPostList/get", async (request:api.UserId) => {
    const result = await api.getPosts(request);
    return result.data;
  });