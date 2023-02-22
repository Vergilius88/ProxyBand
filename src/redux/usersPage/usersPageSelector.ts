import { RootState } from "../store";

export const usersListData = (state: RootState) => state.usersPage.users;
export const userAlbumData = (state: RootState) => state.usersPage.albums
