import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import { Grid, Card, Typography, Stack, Avatar, Button } from "@mui/material";

const demoLogo =
  "https://cdn1.vectorstock.com/i/1000x1000/02/15/soccer-football-logo-icon-with-swoosh-design-vector-35390215.jpg";

const NextMatch = () => {
  const [getAllNextMatches, setGetAllNextMatches] = useState([]);
  useEffect(() => {
    let options = {
      method: "GET",
      url: "https://api-football-beta.p.rapidapi.com/fixtures",
      params: { date: moment().format("YYYY-MM-DD") },
      headers: {
        "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
        "x-rapidapi-key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const apiGetter = response.data.response.slice(0, 100);
        setGetAllNextMatches(apiGetter);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Grid container spacing={1} mt={1}>
        {getAllNextMatches.map((getFixture, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card sx={{ p: 2, display: "flex" }}>
              <Grid container sx={{ alignItems: "center" }}>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, fontFamily: "Montserrat" }}
                  >
                    {getFixture.league.name}
                  </Typography>
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
                      src={getFixture?.teams.away.logo || demoLogo}
                    />
                  </Stack>
                  <span>
                    {getFixture?.teams.away.name.slice(0, 3).toUpperCase()}
                  </span>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "center" }}>
                  <h4>
                    {moment(getFixture.fixture.date).format(
                      "MMM Do YYYY, h:mm a"
                    )}
                  </h4>
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
                      src={getFixture?.teams.home.logo || demoLogo}
                    />
                  </Stack>
                  <span>
                    {getFixture?.teams.home.name.slice(0, 3).toUpperCase()}
                  </span>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default NextMatch;
