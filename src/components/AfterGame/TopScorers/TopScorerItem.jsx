import React, { useState, useEffect } from "react";
import axios from "axios";

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
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

const noAssists = 0;

// const topScorersAll = [
//   {
//     player: {
//       id: 306,
//       name: "Mohamed Salah",
//       firstname: "Mohamed",
//       lastname: "Salah Ghaly",
//       age: 29,
//       birth: {
//         date: "1992-06-15",
//         place: "Muḥāfaẓat al Gharbiyya",
//         country: "Egypt",
//       },
//       nationality: "Egypt",
//       height: "175 cm",
//       weight: "71 kg",
//       injured: false,
//       photo: "https://media.api-sports.io/football/players/306.png",
//     },
//     statistics: [
//       {
//         team: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//         },
//         league: {
//           id: 39,
//           name: "Premier League",
//           country: "England",
//           logo: "https://media.api-sports.io/football/leagues/39.png",
//           flag: "https://media.api-sports.io/flags/gb.svg",
//           season: 2021,
//         },
//         games: {
//           appearences: 11,
//           lineups: 11,
//           minutes: 990,
//           number: null,
//           position: "Attacker",
//           rating: "7.909090",
//           captain: false,
//         },
//         substitutes: { in: 0, out: 0, bench: 0 },
//         shots: { total: 32, on: 24 },
//         goals: { total: 10, conceded: 0, assists: 7, saves: null },
//         passes: { total: 385, key: 26, accuracy: 28 },
//         tackles: { total: 5, blocks: null, interceptions: 2 },
//         duels: { total: 105, won: 40 },
//         dribbles: { attempts: 45, success: 24, past: null },
//         fouls: { drawn: 7, committed: 4 },
//         cards: { yellow: 1, yellowred: 0, red: 0 },
//         penalty: {
//           won: null,
//           commited: null,
//           scored: 1,
//           missed: 0,
//           saved: null,
//         },
//       },
//     ],
//   },
//   {
//     player: {
//       id: 18788,
//       name: "J. Vardy",
//       firstname: "Jamie",
//       lastname: "Vardy",
//       age: 34,
//       birth: { date: "1987-01-11", place: "Sheffield", country: "England" },
//       nationality: "England",
//       height: "179 cm",
//       weight: "74 kg",
//       injured: false,
//       photo: "https://media.api-sports.io/football/players/18788.png",
//     },
//     statistics: [
//       {
//         team: {
//           id: 46,
//           name: "Leicester",
//           logo: "https://media.api-sports.io/football/teams/46.png",
//         },
//         league: {
//           id: 39,
//           name: "Premier League",
//           country: "England",
//           logo: "https://media.api-sports.io/football/leagues/39.png",
//           flag: "https://media.api-sports.io/flags/gb.svg",
//           season: 2021,
//         },
//         games: {
//           appearences: 11,
//           lineups: 11,
//           minutes: 937,
//           number: null,
//           position: "Attacker",
//           rating: "7.172727",
//           captain: false,
//         },
//         substitutes: { in: 0, out: 2, bench: 0 },
//         shots: { total: 21, on: 12 },
//         goals: { total: 7, conceded: 0, assists: 1, saves: null },
//         passes: { total: 128, key: 11, accuracy: 8 },
//         tackles: { total: null, blocks: null, interceptions: null },
//         duels: { total: 62, won: 22 },
//         dribbles: { attempts: 10, success: 6, past: null },
//         fouls: { drawn: 9, committed: 5 },
//         cards: { yellow: 2, yellowred: 0, red: 0 },
//         penalty: {
//           won: null,
//           commited: null,
//           scored: 0,
//           missed: 0,
//           saved: null,
//         },
//       },
//     ],
//   },
//   {
//     player: {
//       id: 18819,
//       name: "M. Antonio",
//       firstname: "Michail",
//       lastname: "Antonio",
//       age: 31,
//       birth: { date: "1990-03-28", place: "London", country: "England" },
//       nationality: "Jamaica",
//       height: "180 cm",
//       weight: "82 kg",
//       injured: false,
//       photo: "https://media.api-sports.io/football/players/18819.png",
//     },
//     statistics: [
//       {
//         team: {
//           id: 48,
//           name: "West Ham",
//           logo: "https://media.api-sports.io/football/teams/48.png",
//         },
//         league: {
//           id: 39,
//           name: "Premier League",
//           country: "England",
//           logo: "https://media.api-sports.io/football/leagues/39.png",
//           flag: "https://media.api-sports.io/flags/gb.svg",
//           season: 2021,
//         },
//         games: {
//           appearences: 10,
//           lineups: 10,
//           minutes: 899,
//           number: null,
//           position: "Midfielder",
//           rating: "7.390000",
//           captain: false,
//         },
//         substitutes: { in: 0, out: 3, bench: 0 },
//         shots: { total: 23, on: 13 },
//         goals: { total: 6, conceded: 0, assists: 3, saves: null },
//         passes: { total: 214, key: 22, accuracy: 14 },
//         tackles: { total: 9, blocks: null, interceptions: 1 },
//         duels: { total: 151, won: 59 },
//         dribbles: { attempts: 26, success: 16, past: null },
//         fouls: { drawn: 15, committed: 18 },
//         cards: { yellow: 3, yellowred: 1, red: 0 },
//         penalty: {
//           won: null,
//           commited: null,
//           scored: 0,
//           missed: 1,
//           saved: null,
//         },
//       },
//     ],
//   },
//   {
//     player: {
//       id: 304,
//       name: "S. Mané",
//       firstname: "Sadio",
//       lastname: "Mané",
//       age: 29,
//       birth: { date: "1992-04-10", place: "Sedhiou", country: "Senegal" },
//       nationality: "Senegal",
//       height: "175 cm",
//       weight: "69 kg",
//       injured: false,
//       photo: "https://media.api-sports.io/football/players/304.png",
//     },
//     statistics: [
//       {
//         team: {
//           id: 40,
//           name: "Liverpool",
//           logo: "https://media.api-sports.io/football/teams/40.png",
//         },
//         league: {
//           id: 39,
//           name: "Premier League",
//           country: "England",
//           logo: "https://media.api-sports.io/football/leagues/39.png",
//           flag: "https://media.api-sports.io/flags/gb.svg",
//           season: 2021,
//         },
//         games: {
//           appearences: 11,
//           lineups: 10,
//           minutes: 914,
//           number: null,
//           position: "Attacker",
//           rating: "6.990909",
//           captain: false,
//         },
//         substitutes: { in: 1, out: 0, bench: 1 },
//         shots: { total: 22, on: 13 },
//         goals: { total: 6, conceded: 0, assists: null, saves: null },
//         passes: { total: 302, key: 13, accuracy: 20 },
//         tackles: { total: 9, blocks: null, interceptions: 7 },
//         duels: { total: 114, won: 44 },
//         dribbles: { attempts: 23, success: 12, past: null },
//         fouls: { drawn: 12, committed: 13 },
//         cards: { yellow: 0, yellowred: 0, red: 0 },
//         penalty: {
//           won: null,
//           commited: null,
//           scored: 0,
//           missed: 0,
//           saved: null,
//         },
//       },
//     ],
//   },
//   {
//     player: {
//       id: 1496,
//       name: "Raphinha",
//       firstname: "Raphael",
//       lastname: "Dias Belloli",
//       age: 25,
//       birth: { date: "1996-12-14", place: "Porto Alegre", country: "Brazil" },
//       nationality: "Brazil",
//       height: "176 cm",
//       weight: "58 kg",
//       injured: false,
//       photo: "https://media.api-sports.io/football/players/1496.png",
//     },
//     statistics: [
//       {
//         team: {
//           id: 63,
//           name: "Leeds",
//           logo: "https://media.api-sports.io/football/teams/63.png",
//         },
//         league: {
//           id: 39,
//           name: "Premier League",
//           country: "England",
//           logo: "https://media.api-sports.io/football/leagues/39.png",
//           flag: "https://media.api-sports.io/flags/gb.svg",
//           season: 2021,
//         },
//         games: {
//           appearences: 10,
//           lineups: 10,
//           minutes: 820,
//           number: null,
//           position: "Attacker",
//           rating: "7.290000",
//           captain: false,
//         },
//         substitutes: { in: 0, out: 3, bench: 0 },
//         shots: { total: 26, on: 12 },
//         goals: { total: 5, conceded: 0, assists: null, saves: null },
//         passes: { total: 311, key: 22, accuracy: 21 },
//         tackles: { total: 13, blocks: null, interceptions: 12 },
//         duels: { total: 131, won: 60 },
//         dribbles: { attempts: 59, success: 28, past: null },
//         fouls: { drawn: 14, committed: 16 },
//         cards: { yellow: 3, yellowred: 0, red: 0 },
//         penalty: {
//           won: null,
//           commited: null,
//           scored: 0,
//           missed: 0,
//           saved: null,
//         },
//       },
//     ],
//   },
//   {
//     player: {
//       id: 1485,
//       name: "Bruno Fernandes",
//       firstname: "Bruno Miguel",
//       lastname: "Borges Fernandes",
//       age: 27,
//       birth: { date: "1994-09-08", place: "Maia", country: "Portugal" },
//       nationality: "Portugal",
//       height: "179 cm",
//       weight: "69 kg",
//       injured: false,
//       photo: "https://media.api-sports.io/football/players/1485.png",
//     },
//     statistics: [
//       {
//         team: {
//           id: 33,
//           name: "Manchester United",
//           logo: "https://media.api-sports.io/football/teams/33.png",
//         },
//         league: {
//           id: 39,
//           name: "Premier League",
//           country: "England",
//           logo: "https://media.api-sports.io/football/leagues/39.png",
//           flag: "https://media.api-sports.io/flags/gb.svg",
//           season: 2021,
//         },
//         games: {
//           appearences: 11,
//           lineups: 11,
//           minutes: 943,
//           number: null,
//           position: "Midfielder",
//           rating: "7.427272",
//           captain: false,
//         },
//         substitutes: { in: 0, out: 3, bench: 0 },
//         shots: { total: 18, on: 7 },
//         goals: { total: 4, conceded: 0, assists: 3, saves: null },
//         passes: { total: 545, key: 38, accuracy: 38 },
//         tackles: { total: 15, blocks: null, interceptions: 3 },
//         duels: { total: 102, won: 40 },
//         dribbles: { attempts: 14, success: 8, past: null },
//         fouls: { drawn: 14, committed: 12 },
//         cards: { yellow: 3, yellowred: 0, red: 0 },
//         penalty: {
//           won: null,
//           commited: null,
//           scored: 0,
//           missed: 1,
//           saved: null,
//         },
//       },
//     ],
//   },
//   {
//     player: {
//       id: 19545,
//       name: "R. James",
//       firstname: "Reece",
//       lastname: "James",
//       age: 22,
//       birth: { date: "1999-12-08", place: "London", country: "England" },
//       nationality: "England",
//       height: "183 cm",
//       weight: "82 kg",
//       injured: false,
//       photo: "https://media.api-sports.io/football/players/19545.png",
//     },
//     statistics: [
//       {
//         team: {
//           id: 49,
//           name: "Chelsea",
//           logo: "https://media.api-sports.io/football/teams/49.png",
//         },
//         league: {
//           id: 39,
//           name: "Premier League",
//           country: "England",
//           logo: "https://media.api-sports.io/football/leagues/39.png",
//           flag: "https://media.api-sports.io/flags/gb.svg",
//           season: 2021,
//         },
//         games: {
//           appearences: 8,
//           lineups: 6,
//           minutes: 458,
//           number: null,
//           position: "Defender",
//           rating: "7.528571",
//           captain: false,
//         },
//         substitutes: { in: 2, out: 1, bench: 3 },
//         shots: { total: 6, on: 5 },
//         goals: { total: 4, conceded: 0, assists: 3, saves: null },
//         passes: { total: 282, key: 15, accuracy: 30 },
//         tackles: { total: 8, blocks: null, interceptions: 2 },
//         duels: { total: 43, won: 25 },
//         dribbles: { attempts: 7, success: 5, past: null },
//         fouls: { drawn: 8, committed: 3 },
//         cards: { yellow: 1, yellowred: 0, red: 1 },
//         penalty: {
//           won: null,
//           commited: null,
//           scored: 0,
//           missed: 0,
//           saved: null,
//         },
//       },
//     ],
//   },
//   {
//     player: {
//       id: 1161,
//       name: "E. Smith Rowe",
//       firstname: "Emile",
//       lastname: "Smith Rowe",
//       age: 21,
//       birth: { date: "2000-07-28", place: "Croydon", country: "England" },
//       nationality: "England",
//       height: "182 cm",
//       weight: "79 kg",
//       injured: false,
//       photo: "https://media.api-sports.io/football/players/1161.png",
//     },
//     statistics: [
//       {
//         team: {
//           id: 42,
//           name: "Arsenal",
//           logo: "https://media.api-sports.io/football/teams/42.png",
//         },
//         league: {
//           id: 39,
//           name: "Premier League",
//           country: "England",
//           logo: "https://media.api-sports.io/football/leagues/39.png",
//           flag: "https://media.api-sports.io/flags/gb.svg",
//           season: 2021,
//         },
//         games: {
//           appearences: 11,
//           lineups: 10,
//           minutes: 893,
//           number: null,
//           position: "Midfielder",
//           rating: "7.209090",
//           captain: false,
//         },
//         substitutes: { in: 1, out: 4, bench: 1 },
//         shots: { total: 14, on: 10 },
//         goals: { total: 4, conceded: 0, assists: 2, saves: null },
//         passes: { total: 335, key: 15, accuracy: 27 },
//         tackles: { total: 5, blocks: null, interceptions: 6 },
//         duels: { total: 79, won: 40 },
//         dribbles: { attempts: 29, success: 21, past: null },
//         fouls: { drawn: 10, committed: 3 },
//         cards: { yellow: 0, yellowred: 0, red: 0 },
//         penalty: {
//           won: null,
//           commited: null,
//           scored: 0,
//           missed: 0,
//           saved: null,
//         },
//       },
//     ],
//   },
// ];

const TopScorerItem = () => {
  const [topScorersAll, setTopScorersAll] = useState([]);
  let currYear = new Date().getFullYear();
  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://api-football-beta.p.rapidapi.com/players/topscorers",
      params: { season: currYear, league: "39" },
      headers: {
        "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
        "x-rapidapi-key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const apiGetter = response.data.response;
        setTopScorersAll(apiGetter);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        {topScorersAll.map((topScorerItem) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            mt={2}
            mb={2}
            key={topScorerItem.player.id}
          >
            <Card sx={{ bgcolor: "#3a6ae1", color: "white" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={topScorerItem.player.photo}
                  alt={topScorerItem.player.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 800 }}
                  >
                    {topScorerItem.player.name}
                  </Typography>
                  <List>
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Appearences:{" "}
                        {topScorerItem.statistics.map(
                          (playerInfo) => playerInfo.games.appearences
                        )}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Shots:{" "}
                        {topScorerItem.statistics.map(
                          (playerInfo) => playerInfo.shots.total
                        )}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Goals:{" "}
                        {topScorerItem.statistics.map(
                          (playerInfo) => playerInfo.goals.total
                        )}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Assists:{" "}
                        {topScorerItem.statistics.map(
                          (playerInfo) => playerInfo.goals.assists || noAssists
                        )}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                  </List>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    General information
                  </Typography>
                  <List>
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Nationality: {topScorerItem.player.nationality}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        League:{" "}
                        {topScorerItem.statistics.map(
                          (playerInfo) => playerInfo.league.name
                        )}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Club:{" "}
                        {topScorerItem.statistics.map(
                          (playerInfo) => playerInfo.team.name
                        )}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Age: {topScorerItem.player.age}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Height: {topScorerItem.player.height}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Weight: {topScorerItem.player.weight}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Position:{" "}
                        {topScorerItem.statistics.map(
                          (playerInfo) => playerInfo.games.position
                        )}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                    <ListItem disablePadding>
                      <Typography variant="subtitle1">
                        Rating:{" "}
                        {topScorerItem.statistics.map((playerInfo) =>
                          Number.parseFloat(playerInfo.games.rating).toFixed(1)
                        )}
                      </Typography>
                    </ListItem>
                    <Divider style={{ background: "white" }} />
                  </List>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* <Box
        sx={{
          bgcolor: "#fff",
        }}
      >
        <Grid container>
          {topScorersAll.map((topScorer) => (
            <Grid item xs={12} key={topScorer.player.id}>
              <List
                sx={{
                  width: "100%",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt={topScorer.player.name}
                      src={topScorer.player.photo}
                    />
                  </ListItemAvatar>
                  <ListItemAvatar>
                    <Avatar
                      // src={topScorer.player.photo}
                      src={topScorer.statistics.map(
                        (playerClub) => playerClub?.team?.logo
                      )}
                    /> */}
      {/* {console.log(
                    topScorer.statistics.map(
                      (playerClub) => playerClub.team.name
                    )
                  )} */}
      {/* </ListItemAvatar>
                  <ListItemText
                    primary={topScorer.player.name}
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {topScorer.statistics.map(
                          (topScorerStatistic) => topScorerStatistic.team.name
                        )}
                      </Typography>
                    }
                  />
                  <Avatar sx={{ bgcolor: blue[500] }}>
                    {topScorer.statistics.map(
                      (topScorerStatistic) => topScorerStatistic.goals.total
                    )}
                  </Avatar> */}
      {/* <Paper
                  sx={{
                    padding: 2,
                    fontWeight: 100,
                  }}
                >
                  {topScorer.statistics.map(
                    (topScorerStatistic) => topScorerStatistic.goals.total
                  )}
                </Paper> */}
      {/* </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </>
  );
};

export default TopScorerItem;
