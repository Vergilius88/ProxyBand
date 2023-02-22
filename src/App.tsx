import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/baseStyles/normalize.css"
import { routes } from "./assets/routes";
import { Header } from "./layouts/header/header";
import { PostsPage } from "./pages/postsPage/postsPage";
import { UsersPage } from "./pages/usersPage/usersPage";
import { useAppDispatch } from "./redux/hooks";
import { getUsersList } from "./redux/usersPage/usersPageOperations";

export default function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsersList())
  }, [])

  return (
    <>
      <Routes>
        <Route path={routes.users} element={
          <>
            <Header title="Users" />
            <UsersPage />
          </>
        } />
        <Route path={routes.posts} element={
          <>
            <Header title="User posts" />
            <PostsPage />
          </>
        } />
      </Routes>
    </>
  );
}

