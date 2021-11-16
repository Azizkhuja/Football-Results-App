import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import {
  List,
  ListItem,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
// NEEDS TO ADD SELECT OPTION

// const allApiInfos = [
//   {
//     fixture: {
//       id: 690925,
//       referee: "Savio Pereira",
//       timezone: "UTC",
//       date: "2021-11-13T00:30:00+00:00",
//       timestamp: 1636763400,
//       periods: { first: 1636763400, second: 1636767000 },
//       venue: { id: 232, name: "Estádio Rei Pelé", city: "Maceió, Alagoas" },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 72,
//       name: "Serie B",
//       country: "Brazil",
//       logo: "https://media.api-sports.io/football/leagues/72.png",
//       flag: "https://media.api-sports.io/flags/br.svg",
//       season: 2021,
//       round: "Regular Season - 36",
//     },
//     teams: {
//       home: {
//         id: 150,
//         name: "CSA",
//         logo: "https://media.api-sports.io/football/teams/150.png",
//         winner: null,
//       },
//       away: {
//         id: 7772,
//         name: "Confiança",
//         logo: "https://media.api-sports.io/football/teams/7772.png",
//         winner: null,
//       },
//     },
//     goals: { home: 0, away: 0 },
//     score: {
//       halftime: { home: 0, away: 0 },
//       fulltime: { home: 0, away: 0 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 728985,
//       referee: "Edilson Ariza Moreno, Colombia",
//       timezone: "UTC",
//       date: "2021-11-13T01:00:00+00:00",
//       timestamp: 1636765200,
//       periods: { first: 1636765200, second: 1636768800 },
//       venue: {
//         id: 1779,
//         name: "Estadio de Fútbol Jaraguay de Montería",
//         city: "Montería",
//       },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 239,
//       name: "Primera A",
//       country: "Colombia",
//       logo: "https://media.api-sports.io/football/leagues/239.png",
//       flag: "https://media.api-sports.io/flags/co.svg",
//       season: 2021,
//       round: "Clausura - 19",
//     },
//     teams: {
//       home: {
//         id: 1133,
//         name: "Jaguares",
//         logo: "https://media.api-sports.io/football/teams/1133.png",
//         winner: true,
//       },
//       away: {
//         id: 1127,
//         name: "Deportivo Cali",
//         logo: "https://media.api-sports.io/football/teams/1127.png",
//         winner: false,
//       },
//     },
//     goals: { home: 1, away: 0 },
//     score: {
//       halftime: { home: 0, away: 0 },
//       fulltime: { home: 1, away: 0 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 708834,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-13T01:05:00+00:00",
//       timestamp: 1636765500,
//       periods: { first: 1636765500, second: 1636769100 },
//       venue: {
//         id: null,
//         name: "Estadio Olimpico Metropolitano",
//         city: "San Pedro Sula",
//       },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 31,
//       name: "World Cup - Qualification CONCACAF",
//       country: "World",
//       logo: "https://media.api-sports.io/football/leagues/31.png",
//       flag: null,
//       season: 2022,
//       round: "Final Round - 7",
//     },
//     teams: {
//       home: {
//         id: 4672,
//         name: "Honduras",
//         logo: "https://media.api-sports.io/football/teams/4672.png",
//         winner: false,
//       },
//       away: {
//         id: 11,
//         name: "Panama",
//         logo: "https://media.api-sports.io/football/teams/11.png",
//         winner: true,
//       },
//     },
//     goals: { home: 2, away: 3 },
//     score: {
//       halftime: { home: 1, away: 0 },
//       fulltime: { home: 2, away: 3 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 708835,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-13T02:00:00+00:00",
//       timestamp: 1636768800,
//       periods: { first: 1636768800, second: 1636772400 },
//       venue: { id: 3284, name: "Estadio Cuscatlán", city: "San Salvador" },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 31,
//       name: "World Cup - Qualification CONCACAF",
//       country: "World",
//       logo: "https://media.api-sports.io/football/leagues/31.png",
//       flag: null,
//       season: 2022,
//       round: "Final Round - 7",
//     },
//     teams: {
//       home: {
//         id: 5159,
//         name: "El Salvador",
//         logo: "https://media.api-sports.io/football/teams/5159.png",
//         winner: null,
//       },
//       away: {
//         id: 2385,
//         name: "Jamaica",
//         logo: "https://media.api-sports.io/football/teams/2385.png",
//         winner: null,
//       },
//     },
//     goals: { home: 1, away: 1 },
//     score: {
//       halftime: { home: 0, away: 0 },
//       fulltime: { home: 1, away: 1 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 708836,
//       referee: "Ivan Arcides Barton Cisneros, El Salvador",
//       timezone: "UTC",
//       date: "2021-11-13T02:00:00+00:00",
//       timestamp: 1636768800,
//       periods: { first: 1636768800, second: 1636772400 },
//       venue: { id: null, name: "TQL Stadium", city: "Cincinnati, Ohio" },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 31,
//       name: "World Cup - Qualification CONCACAF",
//       country: "World",
//       logo: "https://media.api-sports.io/football/leagues/31.png",
//       flag: null,
//       season: 2022,
//       round: "Final Round - 7",
//     },
//     teams: {
//       home: {
//         id: 2384,
//         name: "USA",
//         logo: "https://media.api-sports.io/football/teams/2384.png",
//         winner: true,
//       },
//       away: {
//         id: 16,
//         name: "Mexico",
//         logo: "https://media.api-sports.io/football/teams/16.png",
//         winner: false,
//       },
//     },
//     goals: { home: 2, away: 0 },
//     score: {
//       halftime: { home: 0, away: 0 },
//       fulltime: { home: 2, away: 0 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 729467,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-13T02:00:00+00:00",
//       timestamp: 1636768800,
//       periods: { first: 1636768800, second: 1636772400 },
//       venue: { id: 10546, name: "Estadio de Mazatlán", city: "Mazatlán" },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 673,
//       name: "Liga MX Femenil",
//       country: "Mexico",
//       logo: "https://media.api-sports.io/football/leagues/673.png",
//       flag: "https://media.api-sports.io/flags/mx.svg",
//       season: 2021,
//       round: "Apertura - 16",
//     },
//     teams: {
//       home: {
//         id: 14878,
//         name: "Mazatlán W",
//         logo: "https://media.api-sports.io/football/teams/14878.png",
//         winner: false,
//       },
//       away: {
//         id: 14885,
//         name: "Toluca W",
//         logo: "https://media.api-sports.io/football/teams/14885.png",
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
//       id: 708833,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-13T02:05:00+00:00",
//       timestamp: 1636769100,
//       periods: { first: 1636769100, second: 1636772700 },
//       venue: {
//         id: null,
//         name: "Commonwealth Stadium",
//         city: "Edmonton, Alberta",
//       },
//       status: { long: "Match Finished", short: "FT", elapsed: 90 },
//     },
//     league: {
//       id: 31,
//       name: "World Cup - Qualification CONCACAF",
//       country: "World",
//       logo: "https://media.api-sports.io/football/leagues/31.png",
//       flag: null,
//       season: 2022,
//       round: "Final Round - 7",
//     },
//     teams: {
//       home: {
//         id: 5529,
//         name: "Canada",
//         logo: "https://media.api-sports.io/football/teams/5529.png",
//         winner: true,
//       },
//       away: {
//         id: 29,
//         name: "Costa Rica",
//         logo: "https://media.api-sports.io/football/teams/29.png",
//         winner: false,
//       },
//     },
//     goals: { home: 1, away: 0 },
//     score: {
//       halftime: { home: 0, away: 0 },
//       fulltime: { home: 1, away: 0 },
//       extratime: { home: null, away: null },
//       penalty: { home: null, away: null },
//     },
//   },
//   {
//     fixture: {
//       id: 802756,
//       referee: null,
//       timezone: "UTC",
//       date: "2021-11-13T03:00:00+00:00",
//       timestamp: 1636772400,
//       periods: { first: null, second: null },
//       venue: {
//         id: null,
//         name: "Tehmas Khan Football Stadium",
//         city: "Peshawar",
//       },
//       status: { long: "Match Postponed", short: "PST", elapsed: null },
//     },
//     league: {
//       id: 868,
//       name: "Premier League",
//       country: "Pakistan",
//       logo: "https://media.api-sports.io/football/leagues/868.png",
//       flag: "https://media.api-sports.io/flags/pk.svg",
//       season: 2021,
//       round: "Regular Season - 9",
//     },
//     teams: {
//       home: {
//         id: 17673,
//         name: "Pakistan Air Force",
//         logo: "https://media.api-sports.io/football/teams/17673.png",
//         winner: null,
//       },
//       away: {
//         id: 17669,
//         name: "Karachi United",
//         logo: "https://media.api-sports.io/football/teams/17669.png",
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
// ];

const Fixtures = () => {
  const [getVideos, setGetVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //   const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const getVid = () => {
      let today = new Date().toISOString().slice(0, 10);
      //   // API Football-Beta
      let options = {
        method: "GET",
        url: "https://api-football-beta.p.rapidapi.com/fixtures",
        params: { date: today },
        headers: {
          "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
          "x-rapidapi-key":
            "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
        },
      };
      axios
        .request(options)
        .then((response) => {
          //   const apiGetter = response.data.response;
          const apiGetter = response.data.response.slice(0, 30);
          console.log(apiGetter);
          setGetVideos(apiGetter);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getVid();
  }, []);

  const fetchVideos = getVideos
    .filter((getLeague) => {
      if (searchTerm === "") {
        return getLeague;
      } else if (
        getLeague.league.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return getLeague;
      }
    })
    .map((getVideo) => {
      let teams = getVideo.teams;
      let goals = getVideo.goals;
      let fixture = getVideo.fixture;
      let league = getVideo.league;
      return (
        <ListItem key={getVideo.fixture.id}>
          <Box
            sx={{
              display: "flex",
              width: "30%",
              justifyContent: "space-between",
              mr: 5,
            }}
          >
            {league.name} <br />
            {/* {moment(fixture.date).subtract(10, "days").calendar()} */}
            {moment(fixture.date).format("MMM Do YYYY, h:mm a")}
            <img
              src={league.logo}
              className="fixtures__clubsLogo"
              alt={league.logo}
            />
          </Box>
          <Box sx={{ width: "10%" }}>{fixture.status.long}</Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "25%",
            }}
          >
            {teams.home.name}
            <img
              src={teams.home.logo}
              className="fixtures__clubsLogo"
              alt={teams.home.id}
            />{" "}
          </Box>
          <Box sx={{ width: "10%", mr: 5, ml: 5 }} className="scores">
            {goals.home} - {goals.away}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "25%",
            }}
          >
            <img
              src={teams.away.logo}
              className="fixtures__clubsLogo"
              alt={teams.away.id}
            />
            {teams.away.name}
          </Box>
        </ListItem>
      );
    });
  return (
    <List>
      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose League</InputLabel>
        <Select
          //   labelId="demo-simple-select-label"
          //   id="demo-simple-select"
          //   value={selectedOption}
          //   onChange={handleChange}
          defaultValue=""
        >
          {getVideos.map((singleValue, index) => (
            <MenuItem key={index}>{singleValue.league.name}</MenuItem>
          ))}
        </Select>
      </FormControl> */}

      <TextField
        fullWidth
        label="Search League"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {fetchVideos}
    </List>
  );
};

export default Fixtures;
