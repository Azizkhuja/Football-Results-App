import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
      <Typography color="primary" variant="h3">
        Loading...
      </Typography>
    </Box>
  );
};

export default Loading;
