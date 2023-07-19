import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { NavigationMenuFullscreen } from "./NavigationMenuFullscreen";
import { useNavigate } from "react-router-dom";
import { BOOKSHELF_PAGE, EXPLORE_PAGE } from "../../util/routes";

const PAGES = [EXPLORE_PAGE, BOOKSHELF_PAGE];

interface HeaderButtonProps {
  pathname: string;
  children: React.ReactNode;
}

const HeaderButton = ({ pathname, children }: HeaderButtonProps) => {
  const navigate = useNavigate();
  const active = window.location.pathname === pathname;

  return (
    <Button
      sx={{
        padding: "0.5rem 1rem",
        color: active ? "#111" : "#fff",
        backgroundColor: active ? "#fff" : "#111",
        "&:hover": {
          backgroundColor: active ? "#fff" : "#1e1e1e",
        },
      }}
      variant={active ? "contained" : "text"}
      color="secondary"
      fullWidth
      disableElevation
      onClick={() => navigate(pathname)}
    >
      {children}
    </Button>
  );
};

const Header = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(true);
  };

  const handleCloseNav = () => {
    setOpenNav(false);
  };

  return (
    <>
      <NavigationMenuFullscreen
        open={openNav}
        handleClose={handleCloseNav}
        pages={PAGES}
      />
      <AppBar position="static" color="primary" elevation={0}>
        <Container maxWidth="xl">
          <Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: { md: 2 },
              }}
            >
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={handleOpenNav}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 550, fontFamily: "fangsong" }}
              >
                Bookshelf
              </Typography>
              <Stack direction="row" spacing={2} alignItems="end">
                <Typography sx={{ display: { xs: "none", md: "inline" } }}>
                  {user &&
                    user?.attributes?.given_name +
                      " " +
                      user?.attributes?.family_name}
                </Typography>
                <Typography sx={{ display: { xs: "none", md: "inline" } }}>
                  |
                </Typography>
                <Link onClick={signOut} color="#fff">
                  Sign out
                </Link>
              </Stack>
            </Box>
            <Toolbar
              disableGutters
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {PAGES.map((page) => (
                <HeaderButton key={page.path} pathname={page.path}>
                  {page.name}
                </HeaderButton>
              ))}
            </Toolbar>
          </Stack>
        </Container>
      </AppBar>
    </>
  );
};

export { Header };
