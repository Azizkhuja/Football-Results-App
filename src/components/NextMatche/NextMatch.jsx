import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

import { Grid, Card, Typography, Stack, Avatar, Button } from "@mui/material";

const demoLogo =
  "https://cdn1.vectorstock.com/i/1000x1000/02/15/soccer-football-logo-icon-with-swoosh-design-vector-35390215.jpg";

const getFixtures = [
  {
    fixture: {
      id: 307358,
      referee: "R. Rivero",
      timezone: "UTC",
      date: "2020-02-06T00:00:00+00:00",
      timestamp: 1580947200,
      periods: { first: 1580947200, second: 1580950800 },
      venue: {
        id: 114,
        name: "Estadio Unión de Sunchales",
        city: "Sunchales, Provincia de Santa Fe",
      },
      status: { long: "Match Finished", short: "FT", elapsed: 90 },
    },
    league: {
      id: 130,
      name: "Copa Argentina",
      country: "Argentina",
      logo: "https://media.api-sports.io/football/leagues/130.png",
      flag: "https://media.api-sports.io/flags/ar.svg",
      season: 2020,
      round: "Qualifying Round",
    },
    teams: {
      home: {
        id: 1934,
        name: "Union Sunchales",
        logo: "https://media.api-sports.io/football/teams/1934.png",
        winner: false,
      },
      away: {
        id: 1966,
        name: "Sportivo Belgrano",
        logo: "https://media.api-sports.io/football/teams/1966.png",
        winner: true,
      },
    },
    goals: { home: 0, away: 1 },
    score: {
      halftime: { home: 0, away: 0 },
      fulltime: { home: 0, away: 1 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 310830,
      referee: "M. Escobar",
      timezone: "UTC",
      date: "2020-02-06T00:00:00+00:00",
      timestamp: 1580947200,
      periods: { first: 1580947200, second: 1580950800 },
      venue: { id: 8599, name: "Estadio Armando Barillas", city: "Escuintla" },
      status: { long: "Match Finished", short: "FT", elapsed: 90 },
    },
    league: {
      id: 339,
      name: "Liga Nacional",
      country: "Guatemala",
      logo: "https://media.api-sports.io/football/leagues/339.png",
      flag: "https://media.api-sports.io/flags/gt.svg",
      season: 2019,
      round: "Clausura - 5",
    },
    teams: {
      home: {
        id: 3666,
        name: "Siquinalá",
        logo: "https://media.api-sports.io/football/teams/3666.png",
        winner: true,
      },
      away: {
        id: 3662,
        name: "Guastatoya",
        logo: "https://media.api-sports.io/football/teams/3662.png",
        winner: false,
      },
    },
    goals: { home: 2, away: 1 },
    score: {
      halftime: { home: 1, away: 0 },
      fulltime: { home: 2, away: 1 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 479219,
      referee: null,
      timezone: "UTC",
      date: "2020-02-06T00:00:00+00:00",
      timestamp: 1580947200,
      periods: { first: 1581112800, second: 1581116400 },
      venue: {
        id: 5708,
        name: "Ato Boldon Stadium",
        city: "Couva, San Fernando",
      },
      status: { long: "Match Cancelled", short: "CANC", elapsed: null },
    },
    league: {
      id: 591,
      name: "Pro League",
      country: "Trinidad-And-Tobago",
      logo: "https://media.api-sports.io/football/leagues/591.png",
      flag: "https://media.api-sports.io/flags/tt.svg",
      season: 2019,
      round: "Regular Season - 12",
    },
    teams: {
      home: {
        id: 8006,
        name: "W Connection",
        logo: "https://media.api-sports.io/football/teams/8006.png",
        winner: null,
      },
      away: {
        id: 12565,
        name: "Morvant Caledonia United",
        logo: "https://media.api-sports.io/football/teams/12565.png",
        winner: null,
      },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 487576,
      referee: "Wagner Francisco Silva Souza",
      timezone: "UTC",
      date: "2020-02-06T00:00:00+00:00",
      timestamp: 1580947200,
      periods: { first: 1580947200, second: 1580950800 },
      venue: {
        id: 272,
        name: "Estádio Adauto Moraes",
        city: "Juazeiro, Bahia",
      },
      status: { long: "Match Finished", short: "FT", elapsed: 90 },
    },
    league: {
      id: 602,
      name: "Baiano - 1",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/602.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2020,
      round: "1st Phase - 4",
    },
    teams: {
      home: {
        id: 1224,
        name: "Juazeirense",
        logo: "https://media.api-sports.io/football/teams/1224.png",
        winner: null,
      },
      away: {
        id: 12906,
        name: "Atlanta",
        logo: "https://media.api-sports.io/football/teams/12906.png",
        winner: null,
      },
    },
    goals: { home: 2, away: 2 },
    score: {
      halftime: { home: 1, away: 0 },
      fulltime: { home: 2, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 487955,
      referee: "Adriano Barros Carneiro",
      timezone: "UTC",
      date: "2020-02-06T00:00:00+00:00",
      timestamp: 1580947200,
      periods: { first: 1580947200, second: 1580950800 },
      venue: {
        id: 225,
        name: "Estádio Governador Plácido Aderaldo Castelo",
        city: "Fortaleza, Ceará",
      },
      status: { long: "Match Finished", short: "FT", elapsed: 90 },
    },
    league: {
      id: 609,
      name: "Cearense - 1",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/609.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2020,
      round: "2nd Phase - 2",
    },
    teams: {
      home: {
        id: 154,
        name: "Fortaleza EC",
        logo: "https://media.api-sports.io/football/teams/154.png",
        winner: true,
      },
      away: {
        id: 2229,
        name: "Uniclinic Atletico Clube",
        logo: "https://media.api-sports.io/football/teams/2229.png",
        winner: false,
      },
    },
    goals: { home: 5, away: 0 },
    score: {
      halftime: { home: 1, away: 0 },
      fulltime: { home: 5, away: 0 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 488861,
      referee: null,
      timezone: "UTC",
      date: "2020-02-06T00:15:00+00:00",
      timestamp: 1580948100,
      periods: { first: 1580948100, second: 1580951700 },
      venue: {
        id: null,
        name: "Estádio Universitário Pedro Pedrossian",
        city: "Campo Grande, Mato Grosso do Sul",
      },
      status: { long: "Match Finished", short: "FT", elapsed: 90 },
    },
    league: {
      id: 623,
      name: "Sul-Matogrossense",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/623.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2020,
      round: "1st Round - 1",
    },
    teams: {
      home: {
        id: 13101,
        name: "Nova Andradina",
        logo: "https://media.api-sports.io/football/teams/13101.png",
        winner: null,
      },
      away: {
        id: 1206,
        name: "Corumbaense",
        logo: "https://media.api-sports.io/football/teams/1206.png",
        winner: null,
      },
    },
    goals: { home: 1, away: 1 },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: 1, away: 1 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 488862,
      referee: null,
      timezone: "UTC",
      date: "2020-02-06T00:15:00+00:00",
      timestamp: 1580948100,
      periods: { first: 1580948100, second: 1580951700 },
      venue: {
        id: null,
        name: "Estádio Universitário Pedro Pedrossian",
        city: "Campo Grande, Mato Grosso do Sul",
      },
      status: { long: "Match Finished", short: "FT", elapsed: 90 },
    },
    league: {
      id: 623,
      name: "Sul-Matogrossense",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/623.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2020,
      round: "1st Round - 1",
    },
    teams: {
      home: {
        id: 7855,
        name: "Comercial MS",
        logo: "https://media.api-sports.io/football/teams/7855.png",
        winner: true,
      },
      away: {
        id: 13100,
        name: "Maracaju",
        logo: "https://media.api-sports.io/football/teams/13100.png",
        winner: false,
      },
    },
    goals: { home: 3, away: 2 },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: 3, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
  {
    fixture: {
      id: 293267,
      referee: "Anderson Daronco",
      timezone: "UTC",
      date: "2020-02-06T00:30:00+00:00",
      timestamp: 1580949000,
      periods: { first: 1580949000, second: 1580952600 },
      venue: { id: 380, name: "Estadio Atanasio Girardot", city: "Medellín" },
      status: { long: "Match Finished", short: "FT", elapsed: 90 },
    },
    league: {
      id: 11,
      name: "CONMEBOL Sudamericana",
      country: "World",
      logo: "https://media.api-sports.io/football/leagues/11.png",
      flag: null,
      season: 2020,
      round: "1st Round",
    },
    teams: {
      home: {
        id: 1137,
        name: "Atletico Nacional",
        logo: "https://media.api-sports.io/football/teams/1137.png",
        winner: true,
      },
      away: {
        id: 445,
        name: "Huracan",
        logo: "https://media.api-sports.io/football/teams/445.png",
        winner: false,
      },
    },
    goals: { home: 3, away: 0 },
    score: {
      halftime: { home: 3, away: 0 },
      fulltime: { home: 3, away: 0 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
  },
];

const NextMatch = () => {
  const [getAllNextMatches, setGetAllNextMatches] = useState([]);
  useEffect(() => {
    // let currYear = new Date().getFullYear();
    // let currMonth = new Date().getMonth() + 1;
    // let currDay = new Date().getDate();
    // let fullYear = `${currYear}-${currMonth}-${currDay}`;
    // let options = {
    //   method: "GET",
    //   url: "https://api-football-beta.p.rapidapi.com/fixtures",
    //   params: { date: fullYear },
    //   headers: {
    //     "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
    //     "x-rapidapi-key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
    //   },
    // };
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     const apiGetter = response.data.response.slice(0, 100);
    //     setGetAllNextMatches(apiGetter);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  }, []);
  return (
    <>
      <Grid container spacing={1} mt={1}>
        {getFixtures.map((getFixture, index) => (
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
