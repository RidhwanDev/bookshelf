import { Route, Routes } from "react-router-dom";
import { Authenticator } from "./components/core/Authenticator";
import { Header } from "./components/core/Header";
import Layout from "./components/core/Layout";
import { BOOKSHELF_PATH, EXPLORE_PATH } from "./util/routes";

const App = () => {
  return (
    <Authenticator>
      <>
        <Header />
        <Routes>
          <Route path={EXPLORE_PATH} element={<Layout />}>
            <Route index element={<div>Explore page</div>} />
            <Route path={BOOKSHELF_PATH} element={<div>Bookshelf page</div>} />
          </Route>
        </Routes>
      </>
    </Authenticator>
  );
};

export default App;
