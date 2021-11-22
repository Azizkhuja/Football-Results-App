import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";
const Results = () => {
  return (
    <Grid container mt={2}>
      <Grid item xs={6}>
        <Typography variant="h5">Results</Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="text">View all</Button>
      </Grid>
    </Grid>
  );
};

export default Results;
