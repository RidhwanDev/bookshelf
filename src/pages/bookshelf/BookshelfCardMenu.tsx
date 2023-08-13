import { Divider, ListItemIcon, Typography } from "@mui/material";
import { Book, BookStatus, UpdateBookInput } from "../../api/graphql/generated";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { SmallLoadingSpinner } from "./Bookshelf.style";
import DeleteIcon from "@mui/icons-material/Delete";
import BookStatusMenuItem from "./BookStatusMenuItem";

interface BookshelfCardMenuProps {
  book: Book;
  handleClickOpen: (book: Book) => void;
  handleDeleteBook: (id: string) => Promise<void>;
  deleteBookLoading: boolean;
  handleUpdateBook: (input: UpdateBookInput) => Promise<void>;
  updateBookLoading: boolean;
}

const BookshelfCardMenu = ({
  book,
  handleClickOpen,
  handleDeleteBook,
  deleteBookLoading,
  handleUpdateBook,
  updateBookLoading,
}: BookshelfCardMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewMoreClick = () => {
    handleClickOpen(book);
    handleClose();
  };

  const handleDeleteBookClick = async () => {
    await handleDeleteBook(book.id);
    handleClose();
  };

  const handleUpdateBookStatus = async (status: BookStatus) => {
    if (status === book.status) return;
    await handleUpdateBook({
      id: book.id,
      status,
    });
    handleClose();
  };

  return (
    <>
      <IconButton aria-label="card-menu" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem disabled>
          <Typography variant="caption">Status</Typography>
        </MenuItem>

        {[BookStatus.Reading, BookStatus.Unread, BookStatus.Read].map(
          (status) => (
            <BookStatusMenuItem
              key={status}
              updateBookLoading={updateBookLoading}
              currentStatus={book.status as BookStatus}
              handleUpdateBookStatus={handleUpdateBookStatus}
              status={status}
            />
          )
        )}

        <Divider />
        <MenuItem onClick={handleViewMoreClick}>
          <ListItemIcon>
            <VisibilityIcon fontSize="small" />
          </ListItemIcon>
          View more
        </MenuItem>
        <MenuItem onClick={handleDeleteBookClick} disabled={deleteBookLoading}>
          <ListItemIcon>
            {deleteBookLoading ? (
              <SmallLoadingSpinner />
            ) : (
              <DeleteIcon fontSize="small" />
            )}
          </ListItemIcon>
          Remove
        </MenuItem>
      </Menu>
    </>
  );
};

export default BookshelfCardMenu;
