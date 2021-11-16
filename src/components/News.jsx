import React, { useState, useEffect } from "react";
import axios from "axios";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Box,
  Card,
  Typography,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Avatar,
  Button,
  Stack,
} from "@mui/material";

const bestScorers = [
  {
    player: {
      id: 306,
      name: "Mohamed Salah",
      firstname: "Mohamed",
      lastname: "Salah Ghaly",
      age: 29,
      birth: {
        date: "1992-06-15",
        place: "Muḥāfaẓat al Gharbiyya",
        country: "Egypt",
      },
      nationality: "Egypt",
      height: "175 cm",
      weight: "71 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/306.png",
    },
    statistics: [
      {
        team: {
          id: 40,
          name: "Liverpool",
          logo: "https://media.api-sports.io/football/teams/40.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2021,
        },
        games: {
          appearences: 11,
          lineups: 11,
          minutes: 990,
          number: null,
          position: "Attacker",
          rating: "7.909090",
          captain: false,
        },
        substitutes: { in: 0, out: 0, bench: 0 },
        shots: { total: 32, on: 24 },
        goals: { total: 10, conceded: 0, assists: 7, saves: null },
        passes: { total: 385, key: 26, accuracy: 28 },
        tackles: { total: 5, blocks: null, interceptions: 2 },
        duels: { total: 105, won: 40 },
        dribbles: { attempts: 45, success: 24, past: null },
        fouls: { drawn: 7, committed: 4 },
        cards: { yellow: 1, yellowred: 0, red: 0 },
        penalty: {
          won: null,
          commited: null,
          scored: 1,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 18788,
      name: "J. Vardy",
      firstname: "Jamie",
      lastname: "Vardy",
      age: 34,
      birth: { date: "1987-01-11", place: "Sheffield", country: "England" },
      nationality: "England",
      height: "179 cm",
      weight: "74 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/18788.png",
    },
    statistics: [
      {
        team: {
          id: 46,
          name: "Leicester",
          logo: "https://media.api-sports.io/football/teams/46.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2021,
        },
        games: {
          appearences: 11,
          lineups: 11,
          minutes: 937,
          number: null,
          position: "Attacker",
          rating: "7.172727",
          captain: false,
        },
        substitutes: { in: 0, out: 2, bench: 0 },
        shots: { total: 21, on: 12 },
        goals: { total: 7, conceded: 0, assists: 1, saves: null },
        passes: { total: 128, key: 11, accuracy: 8 },
        tackles: { total: null, blocks: null, interceptions: null },
        duels: { total: 62, won: 22 },
        dribbles: { attempts: 10, success: 6, past: null },
        fouls: { drawn: 9, committed: 5 },
        cards: { yellow: 2, yellowred: 0, red: 0 },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 18819,
      name: "M. Antonio",
      firstname: "Michail",
      lastname: "Antonio",
      age: 31,
      birth: { date: "1990-03-28", place: "London", country: "England" },
      nationality: "Jamaica",
      height: "180 cm",
      weight: "82 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/18819.png",
    },
    statistics: [
      {
        team: {
          id: 48,
          name: "West Ham",
          logo: "https://media.api-sports.io/football/teams/48.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2021,
        },
        games: {
          appearences: 10,
          lineups: 10,
          minutes: 899,
          number: null,
          position: "Midfielder",
          rating: "7.390000",
          captain: false,
        },
        substitutes: { in: 0, out: 3, bench: 0 },
        shots: { total: 23, on: 13 },
        goals: { total: 6, conceded: 0, assists: 3, saves: null },
        passes: { total: 214, key: 22, accuracy: 14 },
        tackles: { total: 9, blocks: null, interceptions: 1 },
        duels: { total: 151, won: 59 },
        dribbles: { attempts: 26, success: 16, past: null },
        fouls: { drawn: 15, committed: 18 },
        cards: { yellow: 3, yellowred: 1, red: 0 },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 1,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 304,
      name: "S. Mané",
      firstname: "Sadio",
      lastname: "Mané",
      age: 29,
      birth: { date: "1992-04-10", place: "Sedhiou", country: "Senegal" },
      nationality: "Senegal",
      height: "175 cm",
      weight: "69 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/304.png",
    },
    statistics: [
      {
        team: {
          id: 40,
          name: "Liverpool",
          logo: "https://media.api-sports.io/football/teams/40.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2021,
        },
        games: {
          appearences: 11,
          lineups: 10,
          minutes: 914,
          number: null,
          position: "Attacker",
          rating: "6.990909",
          captain: false,
        },
        substitutes: { in: 1, out: 0, bench: 1 },
        shots: { total: 22, on: 13 },
        goals: { total: 6, conceded: 0, assists: null, saves: null },
        passes: { total: 302, key: 13, accuracy: 20 },
        tackles: { total: 9, blocks: null, interceptions: 7 },
        duels: { total: 114, won: 44 },
        dribbles: { attempts: 23, success: 12, past: null },
        fouls: { drawn: 12, committed: 13 },
        cards: { yellow: 0, yellowred: 0, red: 0 },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 1496,
      name: "Raphinha",
      firstname: "Raphael",
      lastname: "Dias Belloli",
      age: 25,
      birth: { date: "1996-12-14", place: "Porto Alegre", country: "Brazil" },
      nationality: "Brazil",
      height: "176 cm",
      weight: "58 kg",
      injured: false,
      photo: "https://media.api-sports.io/football/players/1496.png",
    },
    statistics: [
      {
        team: {
          id: 63,
          name: "Leeds",
          logo: "https://media.api-sports.io/football/teams/63.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media.api-sports.io/football/leagues/39.png",
          flag: "https://media.api-sports.io/flags/gb.svg",
          season: 2021,
        },
        games: {
          appearences: 10,
          lineups: 10,
          minutes: 820,
          number: null,
          position: "Attacker",
          rating: "7.290000",
          captain: false,
        },
        substitutes: { in: 0, out: 3, bench: 0 },
        shots: { total: 26, on: 12 },
        goals: { total: 5, conceded: 0, assists: null, saves: null },
        passes: { total: 311, key: 22, accuracy: 21 },
        tackles: { total: 13, blocks: null, interceptions: 12 },
        duels: { total: 131, won: 60 },
        dribbles: { attempts: 59, success: 28, past: null },
        fouls: { drawn: 14, committed: 16 },
        cards: { yellow: 3, yellowred: 0, red: 0 },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
];

const News = () => {
  const [getNews, setGetNews] = useState([]);

  useEffect(() => {
    // var options = {
    //   method: "GET",
    //   url: "https://api-football-beta.p.rapidapi.com/players/topscorers",
    //   params: { season: "2021", league: "39" },
    //   headers: {
    //     "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
    //     "x-rapidapi-key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
    //   },
    // };
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     const apiGetter = response.data.response.slice(0, 5);
    //     console.log(apiGetter);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  });
  return (
    <div>
      {bestScorers.map((bestScorer) => (
        <Card key={bestScorer.player.id} sx={{ maxWidth: 220 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image={bestScorer.player.photo}
              alt={bestScorer.player.id}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {bestScorer.player.firstname} {bestScorer.player.lastname}
              </Typography>
              <Typography mb={1}>
                {bestScorer.statistics.map((league) => (
                  <div key={league.league.id}>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Avatar
                        alt={league.league.name}
                        src={league.league.flag}
                      />
                      <Avatar
                        alt={league.league.name}
                        src={league.league.logo}
                      />
                      <span>{league.league.name}</span>
                    </Stack>
                  </div>
                ))}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Total goals:{" "}
                {bestScorer.statistics.map((goal) => goal.goals.total)} <br />{" "}
                Total assists:{" "}
                {bestScorer.statistics.map((goal) => goal.goals.assists)}
              </Typography>
              <CardActions>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<InfoOutlinedIcon />}
                >
                  Learn More
                </Button>
              </CardActions>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default News;
