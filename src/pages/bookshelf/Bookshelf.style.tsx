import { styled, Box, CircularProgress } from "@mui/material";

export const CategoryContainer = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(2),
}));

export const TabsHeader = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const SmallLoadingSpinner = styled(CircularProgress)(({ theme }) => ({
  maxHeight: "20px",
  maxWidth: "20px",
  color: theme.palette.primary.main,
}));
