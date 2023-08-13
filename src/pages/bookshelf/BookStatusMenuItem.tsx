import { ListItemIcon } from "@mui/material";
import { BookStatus } from "../../api/graphql/generated";
import { MenuItem } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { SmallLoadingSpinner } from "./Bookshelf.style";

interface BookshelfCardProps {
  currentStatus?: BookStatus;
  status: BookStatus;
  handleUpdateBookStatus: (status: BookStatus) => void;
  updateBookLoading: boolean;
}

const statusText = (status?: BookStatus) => {
  switch (status) {
    case BookStatus.Unread:
      return "To Read";
    case BookStatus.Reading:
      return "Reading";
    case BookStatus.Read:
      return "Finished";
  }
};

const BookStatusMenuItem = ({
  currentStatus,
  updateBookLoading,
  status,
  handleUpdateBookStatus,
}: BookshelfCardProps) => {
  return (
    <MenuItem
      onClick={() => handleUpdateBookStatus(status)}
      disabled={updateBookLoading}
    >
      <ListItemIcon>
        {currentStatus === status && updateBookLoading ? (
          <SmallLoadingSpinner />
        ) : null}
        {currentStatus === status && !updateBookLoading ? (
          <DoneIcon fontSize="small" />
        ) : null}
      </ListItemIcon>
      {statusText(status)}
    </MenuItem>
  );
};

export default BookStatusMenuItem;
