import React, { useState, useEffect } from "react";

import { Grid, Container, Box } from "@mui/material";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

import Fixtures from "./components/Fixtures";
import Scorers from "./components/Scorers";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NextMatches from "./components/NextMatche/NextMatches";
import League from "./components/League";
import News from "./components/News/News";
import AfterGame from "./components/AfterGame/AfterGame";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
          <Box
            mt={1}
            sx={{ bgcolor: "secondary.main", borderRadius: "10px", p: 2 }}
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
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
