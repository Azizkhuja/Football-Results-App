import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Grid, Typography, Button, Avatar, Card, Stack } from "@mui/material";

const Results = () => {
  const [getAllResults, setGetAllResults] = useState([]);
  const titleRes = useMediaQuery("(max-width: 375px)");
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
        const apiGetter = response.data.response.slice(0, 8);
        setGetAllResults(apiGetter);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Grid container mt={2}>
        <Grid item xs={6}>
          <Typography variant={titleRes ? "subtitle1" : "h5"}>
            Results
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="results">
            <Button variant="text">View all</Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container>
        {getAllResults.map((getResult, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: "flex", borderRadius: 0 }}>
              <Grid container sx={{ alignItems: "center", bgcolor: "white" }}>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, fontFamily: "Montserrat" }}
                  >
                    {getResult.league.name}
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
                      src={getResult?.teams.home.logo || demoLogo}
                    />
                  </Stack>
                  <span>
                    {getResult?.teams.home.name.slice(0, 3).toUpperCase()}
                  </span>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "center" }}>
                  <h4>
                    {getResult.goals.home} - {getResult.goals.away}
                  </h4>
                  <h4>{getResult.fixture.status.long}</h4>
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

export default Results;
