import { Box, Paper, Skeleton, Stack } from "@mui/material";

const BookshelfCardSkeleton = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 1,
        borderRadius: 2,
        ":hover": {
          boxShadow: "0 0 13px rgba(33,33,33,.2)",
          cursor: "pointer",
        },
      }}
    >
      <Stack
        spacing={1}
        justifyContent="center"
        alignItems="center"
        width="175px"
        sx={{
          textAlign: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={150}
        >
          <Skeleton variant="rectangular" width={150} height={150} />
        </Box>
        <Skeleton variant="text" width={100} height={20} />
        <Skeleton variant="text" width={80} height={16} />
      </Stack>
    </Paper>
  );
};

export default BookshelfCardSkeleton;
