import { Box, Grid, Paper, Skeleton, Stack } from "@mui/material";

const GoogleBookListSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {[...Array(12)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper
            elevation={0}
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
              sx={{
                textAlign: "center",
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height={300}
              >
                <Skeleton variant="rectangular" width={175} height={250} />
              </Box>
              <Skeleton variant="text" width={120} height={30} />
              <Skeleton variant="text" width={100} height={20} />
              <Skeleton variant="text" width={80} height={16} />
              <Skeleton variant="rounded" width="100%" height={36} />
            </Stack>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default GoogleBookListSkeleton;
