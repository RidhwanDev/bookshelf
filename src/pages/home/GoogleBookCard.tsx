import { Stack, Typography } from "@mui/material";
import {
  Book,
  BookStatus,
  GoogleBook,
  useCreateBookMutation,
} from "../../api/graphql/generated";
import BookCard from "../../components/common/BookCard";
import { CardTitle } from "../../components/common/CardTitle";
import { LoadingButton } from "@mui/lab";
import { BookmarkAdd } from "@mui/icons-material";

interface GoogleBookCardProps {
  googleBook: GoogleBook;
}

export const GoogleBookCard = ({ googleBook }: GoogleBookCardProps) => {
  const { id, volumeInfo: book } = googleBook;

  const [addToBookshelf, { loading }] = useCreateBookMutation({
    variables: {
      input: {
        title: book.title,
        authors: book.authors,
        description: book.description,
        publisher: book.publisher,
        publishedDate: book.publishedDate,
        status: BookStatus.Unread,
        imageLinks: {
          smallThumbnail: book.imageLinks?.smallThumbnail,
          thumbnail: book.imageLinks?.thumbnail,
        },
        previewLink: book.previewLink,
        infoLink: book.infoLink,
      },
    },
  });

  return (
    <BookCard
      book={{ id: id, ...book } as Book}
      imgHeight={300}
      cardContent={
        <Stack>
          <CardTitle variant="h6">{book.title}</CardTitle>
          {book.authors?.length ? (
            <Typography variant="body2">{book?.authors[0]}</Typography>
          ) : (
            "-"
          )}
          <Typography variant="body2">{book?.publisher || "-"}</Typography>
          <Typography variant="body2">{book?.publishedDate || "-"}</Typography>
        </Stack>
      }
      cardActions={
        <LoadingButton
          fullWidth
          startIcon={<BookmarkAdd />}
          onClick={() => addToBookshelf()}
          sx={{ alignSelf: "end" }}
          loading={loading}
          loadingIndicator="Adding..."
          variant="contained"
        >
          Add to bookshelf
        </LoadingButton>
      }
    />
  );
};
