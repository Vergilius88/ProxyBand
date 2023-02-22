import { createSlice } from "@reduxjs/toolkit";
import { Posts } from "../Api/api";
import { getUserPostList } from "./postPageOperation";

interface Props {
  posts: Posts[];
  userId:number|null
}

const initialState: Props = {
  posts: [],
  userId: null
};

const userPostsSlice = createSlice({
  name: "userPostsSlice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getUserPostList.fulfilled, (state, data) => {
      state.posts = data.payload;
    });
  },
});

export default userPostsSlice.reducer;
