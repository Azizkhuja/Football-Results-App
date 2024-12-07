import React, { useState, useEffect } from "react";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

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
} from "@mui/material";

const TopScorers = () => {
  let currYear = new Date().getFullYear();
  const [topScorersAll, setTopScorersAll] = useState([]);
  const titleRes = useMediaQuery("(max-width: 375px)");
  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://api-football-beta.p.rapidapi.com/players/topscorers",
      params: { season: `${currYear}`, league: "39" },
      headers: {
        "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
        "x-rapidapi-key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const apiGetter = response.data.response.slice(0, 11);
        setTopScorersAll(apiGetter);
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
            Top Scorers
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="topscorers">
            <Button variant="text">View all</Button>
          </Link>
        </Grid>
      </Grid>
      <Box
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
                    />
                  </ListItemAvatar>
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
                  </Avatar>
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default TopScorers;
