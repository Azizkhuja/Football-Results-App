import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Grid, Typography, Avatar, Card, Stack } from "@mui/material";

const ResultsItem = () => {
  const [getAllResults, setGetAllResults] = useState([]);
  useEffect(() => {
    let options = {
      method: "GET",
      url: "https://api-football-beta.p.rapidapi.com/fixtures",
      params: { date: moment().format("YYYY-MM-DD") },
      headers: {
        "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
        "x-rapidapi-key": "7fc51b42eamshead613badf68db5p1d54a0jsnac2797b92d68",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const apiGetter = response.data.response.slice(0, 50);
        setGetAllResults(apiGetter);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Grid container>
        {getAllResults.map((getResult, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: "flex" }}>
              <Grid container sx={{ alignItems: "center", bgcolor: "white" }}>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, fontFamily: "Montserrat" }}
                  >
                    {getResult.league.name}
                  </Typography>
                  <h5>
                    Venue: {getResult.fixture.venue.name} - City:{" "}
                    {getResult.fixture.venue.city}
                  </h5>
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
                      src={getResult?.teams.home.logo || demoLogo}
                    />
                  </Stack>
                  <span>
                    {getResult?.teams.home.name.slice(0, 3).toUpperCase()}
                  </span>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "center" }}>
                  <h1>
                    {getResult.goals.home} - {getResult.goals.away}
                  </h1>
                  <h3>{getResult.fixture.status.long}</h3>
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
                      src={getResult?.teams.away.logo || demoLogo}
                    />
                  </Stack>
                  <span>
                    {getResult?.teams.away.name.slice(0, 3).toUpperCase()}
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

export default ResultsItem;
