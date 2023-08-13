import {
  styled,
  Card,
  CardContent as Content,
  CardActions as Actions,
} from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 200,
  maxWidth: 300,
  borderRadius: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
}));

export const CardContent = styled(Content)(() => ({
  height: "100%",
}));

export const CardActions = styled(Actions)(() => ({
  justifyContent: "space-between",
}));
