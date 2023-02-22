import { Route, Routes } from "react-router-dom";
import "./assets/baseStyles/normalize.css"
import { routes } from "./assets/routes";
import { Header } from "./layouts/header/header";
import { PostsPage } from "./pages/postsPage/postsPage";
import { UsersPage } from "./pages/usersPage/usersPage";

function App() {
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

export default App;
