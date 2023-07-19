import { Breadcrumbs, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useCurrentPage } from "../../util/routes";

const Layout = () => {
  const { page } = useCurrentPage();
  return (
    <Container maxWidth="xl" sx={{ pt: 2 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ pt: 1 }}>
        <Typography color="text.primary">Bookshelf</Typography>
        <Typography color="text.primary">{page.name}</Typography>
      </Breadcrumbs>

      <Outlet />
    </Container>
  );
};

export default Layout;
