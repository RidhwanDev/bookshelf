import { CardMedia } from "@mui/material";
import { Book } from "../../api/graphql/generated";
import { StyledCard, CardContent, CardActions } from "./BookCard.style";

interface BookshelfCardProps {
  book: Book;
  imgHeight?: number;
  cardContent: React.ReactNode;
  cardActions: React.ReactNode;
}

const BookCard = ({
  book,
  imgHeight,
  cardContent,
  cardActions,
}: BookshelfCardProps) => {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height={imgHeight || 200}
        image={
          book.imageLinks?.smallThumbnail ||
          book.imageLinks?.thumbnail ||
          "no-book-img.png"
        }
        alt={book.title}
        sx={{
          pt: 2,
          objectFit: "contain",
        }}
      />
      <CardContent>{cardContent}</CardContent>
      <CardActions disableSpacing>{cardActions}</CardActions>
    </StyledCard>
  );
};

export default BookCard;
