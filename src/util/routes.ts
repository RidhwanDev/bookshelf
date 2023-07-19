import { useLocation } from "react-router-dom";

export interface Page {
  path: string;
  name: string;
}

export const EXPLORE_PATH = "/";
export const BOOKSHELF_PATH = "/bookshelf";

export const EXPLORE_PAGE: Page = {
  path: EXPLORE_PATH,
  name: "Explore",
};

export const BOOKSHELF_PAGE: Page = {
  path: BOOKSHELF_PATH,
  name: "My Bookshelf",
};

export const useCurrentPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const page = getPage(path);
  return { page, path };
};

const getPage = (path: string) => {
  switch (path) {
    case EXPLORE_PATH:
      return EXPLORE_PAGE;
    case BOOKSHELF_PATH:
      return BOOKSHELF_PAGE;
    default:
      return EXPLORE_PAGE;
  }
};
