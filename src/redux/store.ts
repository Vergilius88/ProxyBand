import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usersPageSlice from "./usersPage/usersPageSlice";
import userPostsSlice from "./postsPage/postsPageSlice";

const reducer = combineReducers({
  usersPage: usersPageSlice,
  postsPage: userPostsSlice,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
