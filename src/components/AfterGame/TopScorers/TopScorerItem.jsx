import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

const noAssists = 0;

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
    </>
  );
};

export default TopScorerItem;
