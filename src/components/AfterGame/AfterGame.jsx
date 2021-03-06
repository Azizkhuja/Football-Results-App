import React from "react";

import { Grid } from "@mui/material";

import Results from "./Results/Results";
import TopScorers from "./TopScorers/TopScorers";

const AfterGame = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <TopScorers />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Results />
      </Grid>
    </Grid>
  );
};

export default AfterGame;
