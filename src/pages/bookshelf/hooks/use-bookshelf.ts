import { useMemo, useState } from "react";
import {
  Book,
  BookStatus,
  UpdateBookInput,
  useDeleteBookMutation,
  useListBooksQuery,
  useUpdateBookMutation,
} from "../../../api/graphql/generated";

export const useBookshelf = () => {
  const { data, loading, fetchMore } = useListBooksQuery({
    fetchPolicy: "cache-and-network",
  });
  const [fetchingMore, setFetchingMore] = useState(false);
  const [updateBook, { loading: updateBookLoading }] = useUpdateBookMutation();
  const [deleteBook, { loading: deleteBookLoading }] = useDeleteBookMutation({
    update(cache, { data }) {
      if (!data?.deleteBook) return;
      const normalizedId = cache.identify(data.deleteBook);
      cache.evict({ id: normalizedId });
      cache.gc();
    },
  });

  const books = useMemo(
    () => ({
      reading: data?.listBooks?.items?.filter(
        (book) => book?.status === BookStatus.Reading
      ) as Book[],
      unread: data?.listBooks?.items?.filter(
        (book) => book?.status === BookStatus.Unread
      ) as Book[],
      read: data?.listBooks?.items?.filter(
        (book) => book?.status === BookStatus.Read
      ) as Book[],
    }),
    [data?.listBooks?.items]
  );

  const handleUpdateBook = async ({
    id,
    status,
    favourite,
  }: UpdateBookInput) => {
    await updateBook({
      variables: {
        input: {
          id,
          status,
          favourite,
        },
      },
    });
  };

  const handleDeleteBook = async (id: string) => {
    await deleteBook({
      variables: {
        input: {
          id,
        },
      },
    });
  };

  const fetchMoreBooks = async () => {
    setFetchingMore(true);
    await fetchMore({
      variables: {
        nextToken: data?.listBooks?.nextToken,
      },
      updateQuery(previousResult, { fetchMoreResult }) {
        if (!fetchMoreResult) {
          return previousResult;
        }

        const previousBooks = previousResult?.listBooks?.items || [];
        const moreBooks = fetchMoreResult?.listBooks?.items || [];

        if (fetchMoreResult.listBooks) {
          fetchMoreResult.listBooks.items = [...previousBooks, ...moreBooks];
        }

        setFetchingMore(false);
        return { ...fetchMoreResult };
      },
    });
  };

  const canFetchMoreBooks = useMemo(() => data?.listBooks?.nextToken, [data]);

  return {
    books,
    loading,
    updateBookLoading,
    deleteBookLoading,
    handleUpdateBook,
    handleDeleteBook,
    fetchMoreBooks,
    fetchingMore,
    canFetchMoreBooks,
  };
};
