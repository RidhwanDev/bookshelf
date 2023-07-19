import {
  AppBar,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Close as CloseIcon } from "@mui/icons-material";
import React from "react";
import { Page } from "../../util/routes";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface NavigationMenuProps {
  open: boolean;
  handleClose: () => void;
  pages: Page[];
}

export const NavigationMenuFullscreen = ({
  open,
  handleClose,
  pages,
}: NavigationMenuProps) => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
    handleClose();
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Bookshelf
          </Typography>
        </Toolbar>
      </AppBar>
      <List disablePadding>
        {pages.map((page) => (
          <div key={page.path}>
            <ListItemButton
              sx={{ py: 3 }}
              onClick={() => handleNavigate(page.path)}
            >
              <ListItemText primary={page.name} />
            </ListItemButton>
            <Divider />
          </div>
        ))}
      </List>
    </Dialog>
  );
};
