import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";

const NextMatches = () => {
  return (
    // <Card sx={{ borderRadius: "00px" }}>
    <>
      <Grid container mt={2}>
        <Grid item xs={6}>
          <Typography variant="h5">Next Matches</Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography>View all</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 2, display: "flex" }}>
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Typography variant="h5">Round 12</Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </Stack>
                <span>BAR</span>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <h4>12.02.2021</h4>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "flex-end" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </Stack>
                <span>BAR</span>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>

    // </Card>
  );
};

export default NextMatches;
