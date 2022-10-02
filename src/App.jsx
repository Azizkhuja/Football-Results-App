import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactGA from "react-ga";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Material UI
import { Grid, Container, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Context
import { NewsContext } from "./contexts/NewsContext";
import "./App.css";

// Local components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NextMatches from "./components/NextMatche/NextMatches";
import NextMatch from "./components/NextMatche/NextMatch";
import News from "./components/News/News";
import AfterGame from "./components/AfterGame/AfterGame";
import NewsPage from "./components/News/NewsPage";
import TopScorerItem from "./components/AfterGame/TopScorers/TopScorerItem";
import Loading from "./components/Loading";
import ResultsItem from "./components/AfterGame/Results/ResultsItem";
import Footer from "./components/Footer";

function initizeAnalytics() {
  ReactGA.initialize("G-BLL9K3XSHM");
  ReactGA.pageview("/");
}

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
  initizeAnalytics();
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container>
          <>
            <Navbar />
            <NewsContext.Provider value={{}}>
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
                        <NextMatches />
                        <AfterGame />
                      </Grid>
                    </Grid>
                  </Box>
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
              <Footer />
            </NewsContext.Provider>
          </>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
