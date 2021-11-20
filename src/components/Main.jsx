import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import logo from "../images/hero.svg";

const Main = () => {
  const matches = useMediaQuery("(max-width: 375px)");

  return (
    <Card color="secondary" sx={{ borderRadius: "00px" }}>
      <Grid
        container
        spacing={1}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item md={7}>
          <CardContent>
            <Typography
              variant="h2"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Football Statistics
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Football Statistics is the premier football stats and data
              coverage in 1000+ football leagues worldwide and cover football
              results. Team stats, League stats, and Player stats are covered
              with details goals scored.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item md={5}>
          <CardMedia
            component="img"
            height={matches ? 200 : 300}
            image={logo}
            alt="hero image"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Main;
