import { Route, Routes } from "react-router-dom";
import { Authenticator } from "./components/core/Authenticator";
import { Header } from "./components/core/Header";
import Layout from "./components/core/Layout";
import { BOOKSHELF_PATH, EXPLORE_PATH } from "./util/routes";
import { Bookshelf } from "./pages/bookshelf/Bookshelf";
import { Home } from "./pages/home/Home";

const App = () => {
  return (
    <Authenticator>
      <>
        <Header />
        <Routes>
          <Route path={EXPLORE_PATH} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={BOOKSHELF_PATH} element={<Bookshelf />} />
          </Route>
        </Routes>
      </>
    </Authenticator>
  );
};

export default App;
