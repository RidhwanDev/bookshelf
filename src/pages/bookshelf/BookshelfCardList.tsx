import { Stack, useMediaQuery, useTheme } from "@mui/material";
import BookshelfCard from "./BookshelfCard";
import { Book, UpdateBookInput } from "../../api/graphql/generated";
import BookshelfCardSkeleton from "./BookshelfCardSkeleton";

interface BookshelfCardListProps {
  loading: boolean;
  books: Book[];
  handleClickOpen: (book: Book) => void;
  updateBookLoading: boolean;
  deleteBookLoading: boolean;
  handleUpdateBook: (input: UpdateBookInput) => Promise<void>;
  handleDeleteBook: (id: string) => Promise<void>;
}

const BookshelfCardList = ({
  loading,
  books,
  handleClickOpen,
  updateBookLoading,
  deleteBookLoading,
  handleUpdateBook,
  handleDeleteBook,
}: BookshelfCardListProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={1}
      p={2}
      overflow="auto"
    >
      {loading
        ? [...Array(6)].map((_, index) => <BookshelfCardSkeleton key={index} />)
        : books.map((book: any) => (
            <BookshelfCard
              key={book.id}
              book={book}
              handleClickOpen={handleClickOpen}
              updateBookLoading={updateBookLoading}
              deleteBookLoading={deleteBookLoading}
              handleUpdateBook={handleUpdateBook}
              handleDeleteBook={handleDeleteBook}
            />
          ))}
    </Stack>
  );
};

export default BookshelfCardList;
