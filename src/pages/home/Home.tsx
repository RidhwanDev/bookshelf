import { useMemo, useState } from "react";
import {
  GoogleBook,
  useSearchGoogleBooksQuery,
} from "../../api/graphql/generated";
import PageTitle from "../../components/common/PageTitle";
import { SearchBar } from "./Home.style";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDebounce } from "use-debounce";
import { Box, Divider } from "@mui/material";
import { GoogleBookCard } from "./GoogleBookCard";
import GoogleBookListSkeleton from "./GoogleBookListSkeleton";
import { LoadingButton } from "@mui/lab";

export const Home = () => {
  const [search, setSearch] = useState("javascript");
  const [debouncedValue] = useDebounce(search, 500);
  const [fetchingMore, setFetchingMore] = useState(false);

  const { data, loading, fetchMore } = useSearchGoogleBooksQuery({
    variables: {
      query: debouncedValue,
      apiKey: process.env.GOOGLE_API_KEY!,
      startIndex: 0,
    },
  });

  console.log(data, loading);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const books = useMemo(
    () => (data?.searchGoogleBooks.items as GoogleBook[]) || [],
    [data]
  );

  const handleFetchMore = async () => {
    setFetchingMore(true);
    await fetchMore({
      variables: {
        query: debouncedValue,
        apiKey: process.env.GOOGLE_API_KEY!,
        startIndex: books.length,
      },
      updateQuery(previousResult, { fetchMoreResult }) {
        if (!fetchMoreResult) {
          return previousResult;
        }

        const previousBooks = previousResult?.searchGoogleBooks?.items || [];
        const moreBooks = fetchMoreResult?.searchGoogleBooks?.items || [];

        if (fetchMoreResult.searchGoogleBooks) {
          fetchMoreResult.searchGoogleBooks.items = [
            ...previousBooks,
            ...moreBooks,
          ];
        }

        setFetchingMore(false);
        return { ...fetchMoreResult };
      },
    });
  };

  return (
    <>
      <PageTitle title="Explore" />

      <SearchBar
        id="search-bar"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        startAdornment={<SearchIcon sx={{ mr: 1 }} />}
        fullWidth
      />

      <Divider sx={{ my: 2 }} />

      {loading ? (
        <GoogleBookListSkeleton />
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gap={2}
        >
          {books.map((book: GoogleBook) => (
            <GoogleBookCard googleBook={book} key={book.id} />
          ))}
        </Box>
      )}
      <Box p={3} display="flex" justifyContent="center">
        <LoadingButton
          variant="contained"
          color="primary"
          loading={fetchingMore}
          loadingIndicator="loading..."
          disabled={books.length === data?.searchGoogleBooks?.totalItems}
          onClick={handleFetchMore}
        >
          Load more
        </LoadingButton>
      </Box>
    </>
  );
};
