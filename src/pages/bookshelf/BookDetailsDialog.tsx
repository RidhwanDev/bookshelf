import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Book } from "../../api/graphql/generated";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Stack,
  Typography,
} from "@mui/material";

interface BookDetailsDialogProps {
  handleClose: () => void;
  book?: Book;
}

export default function BookDetailsDialog({
  handleClose,
  book,
}: BookDetailsDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  if (!book) return;

  return (
    <Dialog
      maxWidth="md"
      fullScreen={fullScreen}
      open
      onClose={handleClose}
      aria-labelledby={`dialog-${book}`}
      PaperProps={{
        sx: {
          borderRadius: "25px",
        },
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="70%"
          pb={1}
        >
          <DialogTitle id={`dialog-${book}`}>{book.title}</DialogTitle>
          <DialogContent>
            <Stack direction="row">
              <DialogContentText>
                <Stack spacing={2}>
                  <div>
                    {book.description?.substring(0, 500) + "... "}
                    <Link href={book.previewLink || book.infoLink || ""}>
                      Read More
                    </Link>
                  </div>
                  <Box display="flex" justifyContent="space-between">
                    <Box width="100%">
                      <Typography variant="body1">
                        Authors: {book.authors?.join(", ")}
                      </Typography>
                      <Typography variant="body1">
                        Publisher : {book.publisher}
                      </Typography>
                      <Typography variant="body1">
                        Release Date : {book.publishedDate}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </DialogContentText>
            </Stack>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "start", pl: 3 }}>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Box>
        <Box display="flex" width="30%" height="100%">
          <img
            src={
              book.imageLinks?.smallThumbnail ||
              book.imageLinks?.thumbnail ||
              "no-book-img.png"
            }
            alt={book.title}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Stack>
    </Dialog>
  );
}
