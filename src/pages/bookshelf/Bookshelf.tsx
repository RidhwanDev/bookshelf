import { Button } from "@mui/material";
import {
  useCreateBookMutation,
  useListBooksQuery,
} from "../../api/graphql/generated";

export const Bookshelf = () => {
  const { data, loading, error, refetch } = useListBooksQuery();

  const [
    createBook,
    {
      data: createBookData,
      loading: createBookLoading,
      error: createBookError,
    },
  ] = useCreateBookMutation();

  console.log(data, loading, error);

  const handleCreateBook = async () => {
    await createBook({
      variables: {
        input: {
          title: "My Book",
          publishedDate: "2021-10-01",
          publisher: "Me",
        },
      },
    });

    refetch();
  };
  if (loading || createBookLoading) return <div>Loading...</div>;
  return (
    <>
      <Button variant="contained" onClick={handleCreateBook}>
        Create
      </Button>

      {data?.listBooks?.items?.map((book) => (
        <div key={book?.id}>{book?.title}</div>
      ))}
    </>
  );
};
