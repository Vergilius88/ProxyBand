import { createSlice } from "@reduxjs/toolkit";
import { Albums, User } from "../api/api";
import { getUserAlbumsList, getUsersList } from "./usersPageOperations";

interface Props {
  users: User[];
  albums: Albums[];
}

const initialState: Props = {
  users: [],
  albums: [],
};

const usersPageSlice = createSlice({
  name: "usersPageSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state, data) => {
      state.users = data.payload;
    });
    builder.addCase(getUserAlbumsList.fulfilled, (state, data) => {
      state.albums = data.payload;
    });
  },
});

export default usersPageSlice.reducer;
