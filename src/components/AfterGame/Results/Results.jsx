import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

import { blue } from "@mui/material/colors";

import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Card,
  Stack,
} from "@mui/material";

// const getResults = [
//   {
//     fixture: {
//       id: 802772,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-22T00:00:00+00:00",
//       timestamp: 1637539200,
//       periods: { first: null, second: null },
//       venue: { id: null, name: "Municipal Stadium", city: "Rawalpindi" },
//       status: { long: "Match Postponed", short: "PST", elapsed: null },
//     },
//     league: {
//       id: 868,
//       name: "Premier League",
//       country: "Pakistan",
//       logo: "https://media.api-sports.io/football/leagues/868.png",
//       flag: "https://media.api-sports.io/flags/pk.svg",
//       season: 2021,
//       round: "Regular Season - 10",
//     },
//     teams: {
//       home: {
//         id: 17676,
//         name: "SNGPL",
//         logo: "https://media.api-sports.io/football/teams/17676.png",
//         winner: null,
//       },
//       away: {
//         id: 17674,
//         name: "Pakistan Army",
//         logo: "https://media.api-sports.io/football/teams/17674.png",
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 804899,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-22T00:00:00+00:00",
//       timestamp: 1637539200,
//       periods: { first: null, second: null },
//       venue: { id: 4116, name: "Isidoro Beaton Stadium", city: "Belmopan" },
//       status: { long: "Not Started", short: "NS", elapsed: null },
//     },
//     league: {
//       id: 416,
//       name: "Premier League",
//       country: "Belize",
//       logo: "https://media.api-sports.io/football/leagues/416.png",
//       flag: "https://media.api-sports.io/flags/bz.svg",
//       season: 2021,
//       round: "Opening - 5",
//     },
//     teams: {
//       home: {
//         id: 18054,
//         name: "Caesar Ridge",
//         logo: "https://media.api-sports.io/football/teams/18054.png",
//         winner: null,
//       },
//       away: {
//         id: 5477,
//         name: "Altitude",
//         logo: "https://media.api-sports.io/football/teams/5477.png",
//         winner: null,
//       },
//     },
//     goals: { home: null, away: null },
//     score: {
//       halftime: { home: null, away: null },
//       fulltime: { home: null, away: null },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 807230,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-22T00:00:00+00:00",
//       timestamp: 1637539200,
//       periods: { first: 1637539200, second: 1637542800 },
//       venue: {
//         id: null,
//         name: "Compleho Deportivo Guillermo Prospero Trinidad",
//         city: "Oranjestad",
//       },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 421,
//       name: "Division di Honor",
//       country: "Aruba",
//       logo: "https://media.api-sports.io/football/leagues/421.png",
//       flag: "https://media.api-sports.io/flags/aw.svg",
//       season: 2021,
//       round: "Regular Season - 5",
//     },
//     teams: {
//       home: {
//         id: 8238,
//         name: "Estrella",
//         logo: "https://media.api-sports.io/football/teams/8238.png",
//         winner: false,
//       },
//       away: {
//         id: 8242,
//         name: "River Plate",
//         logo: "https://media.api-sports.io/football/teams/8242.png",
//         winner: true,
//       },
//     },
//     goals: { home: 0, away: 2 },
//     score: {
//       halftime: { home: 0, away: 1 },
//       fulltime: { home: 0, away: 2 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 811006,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-22T00:00:00+00:00",
//       timestamp: 1637539200,
//       periods: { first: 1637539200, second: 1637542800 },
//       venue: { id: 3498, name: "Estadio Cacique Diriangén", city: "Diriamba" },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 396,
//       name: "Primera Division",
//       country: "Nicaragua",
//       logo: "https://media.api-sports.io/football/leagues/396.png",
//       flag: "https://media.api-sports.io/flags/ni.svg",
//       season: 2021,
//       round: "Apertura - 18",
//     },
//     teams: {
//       home: {
//         id: 4641,
//         name: "Diriangén",
//         logo: "https://media.api-sports.io/football/teams/4641.png",
//         winner: true,
//       },
//       away: {
//         id: 10160,
//         name: "Jalapa",
//         logo: "https://media.api-sports.io/football/teams/10160.png",
//         winner: false,
//       },
//     },
//     goals: { home: 5, away: 0 },
//     score: {
//       halftime: { home: 3, away: 0 },
//       fulltime: { home: 5, away: 0 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 811007,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-22T00:00:00+00:00",
//       timestamp: 1637539200,
//       periods: { first: 1637539200, second: 1637542800 },
//       venue: { id: 3502, name: "Estadio Independencia", city: "Estelí" },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 396,
//       name: "Primera Division",
//       country: "Nicaragua",
//       logo: "https://media.api-sports.io/football/leagues/396.png",
//       flag: "https://media.api-sports.io/flags/ni.svg",
//       season: 2021,
//       round: "Apertura - 18",
//     },
//     teams: {
//       home: {
//         id: 4645,
//         name: "Real Estelí",
//         logo: "https://media.api-sports.io/football/teams/4645.png",
//         winner: true,
//       },
//       away: {
//         id: 4640,
//         name: "Deportivo Ocotal",
//         logo: "https://media.api-sports.io/football/teams/4640.png",
//         winner: false,
//       },
//     },
//     goals: { home: 4, away: 0 },
//     score: {
//       halftime: { home: 1, away: 0 },
//       fulltime: { home: 4, away: 0 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 720443,
//       referee: "Fernando Rapallini, Argentina",
//       timezone: "UTC",
//       date: "2021-11-22T00:30:00+00:00",
//       timestamp: 1637541000,
//       periods: { first: 1637541000, second: 1637544600 },
//       venue: {
//         id: 97,
//         name: "Estadio Ciudad de Vicente López",
//         city: "Vicente López, Provincia de Buenos Aires",
//       },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 128,
//       name: "Primera Division",
//       country: "Argentina",
//       logo: "https://media.api-sports.io/football/leagues/128.png",
//       flag: "https://media.api-sports.io/flags/ar.svg",
//       season: 2021,
//       round: "2nd Phase - 21",
//     },
//     teams: {
//       home: {
//         id: 1064,
//         name: "Platense",
//         logo: "https://media.api-sports.io/football/teams/1064.png",
//         winner: false,
//       },
//       away: {
//         id: 435,
//         name: "River Plate",
//         logo: "https://media.api-sports.io/football/teams/435.png",
//         winner: true,
//       },
//     },
//     goals: { home: 0, away: 1 },
//     score: {
//       halftime: { home: 0, away: 1 },
//       fulltime: { home: 0, away: 1 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 812185,
//       referee: "Fernando Guerrero Ramirez, Mexico",
//       timezone: "UTC",
//       date: "2021-11-22T01:15:00+00:00",
//       timestamp: 1637543700,
//       periods: { first: 1637543700, second: 1637547300 },
//       venue: { id: 7182, name: "Estadio Azteca", city: "D.F." },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 262,
//       name: "Liga MX",
//       country: "Mexico",
//       logo: "https://media.api-sports.io/football/leagues/262.png",
//       flag: "https://media.api-sports.io/flags/mx.svg",
//       season: 2021,
//       round: "Apertura - Reclasificación",
//     },
//     teams: {
//       home: {
//         id: 2295,
//         name: "Cruz Azul",
//         logo: "https://media.api-sports.io/football/teams/2295.png",
//         winner: false,
//       },
//       away: {
//         id: 2282,
//         name: "Monterrey",
//         logo: "https://media.api-sports.io/football/teams/2282.png",
//         winner: true,
//       },
//     },
//     goals: { home: 1, away: 4 },
//     score: {
//       halftime: { home: 1, away: 2 },
//       fulltime: { home: 1, away: 4 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 811005,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-22T02:00:00+00:00",
//       timestamp: 1637546400,
//       periods: { first: 1637546400, second: 1637550000 },
//       venue: { id: null, name: "Estadio Nacional de Fútbol", city: "Managua" },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 396,
//       name: "Primera Division",
//       country: "Nicaragua",
//       logo: "https://media.api-sports.io/football/leagues/396.png",
//       flag: "https://media.api-sports.io/flags/ni.svg",
//       season: 2021,
//       round: "Apertura - 18",
//     },
//     teams: {
//       home: {
//         id: 4644,
//         name: "Managua",
//         logo: "https://media.api-sports.io/football/teams/4644.png",
//         winner: true,
//       },
//       away: {
//         id: 4648,
//         name: "Walter Ferretti",
//         logo: "https://media.api-sports.io/football/teams/4648.png",
//         winner: false,
//       },
//     },
//     goals: { home: 3, away: 1 },
//     score: {
//       halftime: { home: 1, away: 1 },
//       fulltime: { home: 3, away: 1 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
// ];

const Results = () => {
  const [getAllResults, setGetAllResults] = useState([]);
  useEffect(() => {
    let currYear = new Date().getFullYear();
    let currMonth = new Date().getMonth() + 1;
    let currDay = new Date().getDate();
    let fullYear = `${currYear}-${currMonth}-${currDay}`;
    let options = {
      method: "GET",
      url: "https://api-football-beta.p.rapidapi.com/fixtures",
      params: { date: fullYear },
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
          <Typography variant="h5">Results</Typography>
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
          // <Grid item xs={12} key={getResult.fixture.id}>
          //   <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          //     <ListItem>
          //       <ListItemAvatar>
          //         <Avatar
          //           alt={getResult.teams.home.name}
          //           src={getResult.teams.home.logo}
          //         />
          //       </ListItemAvatar>
          //       <ListItemText primary={getResult.teams.home.name} />
          //       {getResult.goals.home}-{getResult.goals.away}
          //       <ListItemText
          //         sx={{ marginLeft: 2 }}
          //         primary={getResult.teams.away.name}
          //       />
          //       <ListItemAvatar>
          //         <Avatar
          //           alt={getResult.teams.away.name}
          //           src={getResult.teams.away.logo}
          //         />
          //       </ListItemAvatar>
          //       <Divider
          //         sx={{ marginRight: 2 }}
          //         orientation="vertical"
          //         flexItem
          //       />
          //       {getResult.fixture.status.short}
          //     </ListItem>
          //     <Divider variant="inset" component="li" />
          //   </List>
          // </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Results;
