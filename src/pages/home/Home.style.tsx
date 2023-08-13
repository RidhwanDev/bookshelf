import { OutlinedInput, styled } from "@mui/material";

export const SearchBar = styled(OutlinedInput)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(1.5),
  padding: "0 10px",
}));
