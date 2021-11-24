import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid, Container, Box } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { NewsContext } from "./contexts/NewsContext";
import "./App.css";

import Fixtures from "./components/Fixtures";
import Scorers from "./components/Scorers";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NextMatches from "./components/NextMatche/NextMatches";
import NextMatch from "./components/NextMatche/NextMatch";
import League from "./components/League";
import News from "./components/News/News";
import AfterGame from "./components/AfterGame/AfterGame";
import NewsPage from "./components/News/NewsPage";
import TopScorerItem from "./components/AfterGame/TopScorers/TopScorerItem";
import Loading from "./components/Loading";
import ResultsItem from "./components/AfterGame/Results/ResultsItem";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3B6AE2",
    },
    secondary: {
      main: "#f7f7f7",
    },
  },
});

function App() {
  const [newsAll, setNewsAll] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://premier-league-news.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "premier-league-news.p.rapidapi.com",
        "x-rapidapi-key": "5275a8e1dcmshe6cde61534690eap13333ejsncffe8ac2d285",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const apiGetter = response.data.slice(0, 80);
        setNewsAll(apiGetter);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <Router>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Container>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Navbar />
              <NewsContext.Provider
                value={{ newsAll, setNewsAll, isLoading, setIsLoading }}
              >
                <Switch>
                  <Route exact path="/">
                    <Box
                      mt={1}
                      sx={{
                        bgcolor: "secondary.main",
                        borderRadius: "10px",
                        p: 2,
                      }}
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Main />
                          <News />
                          <NextMatches />
                          <AfterGame />

                          {/* <Fixtures /> */}
                          {/* <League /> */}
                        </Grid>
                      </Grid>
                    </Box>
                  </Route>
                  <Route exact path="/news">
                    <NewsPage />
                  </Route>
                  <Route exact path="/matches">
                    <NextMatch />
                  </Route>
                  <Route exact path="/topscorers">
                    <TopScorerItem />
                  </Route>
                  <Route exact path="/results">
                    <ResultsItem />
                  </Route>
                </Switch>
              </NewsContext.Provider>
            </>
          )}
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
