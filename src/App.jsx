import React, { useState, useEffect } from "react";

import { Grid, Container, Box } from "@mui/material";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

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
import News from "./components/News";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NextMatches from "./components/NextMatche/NextMatches";

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
                <NextMatches />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>

      {/* <Box mt={2} ml="auto" mr="auto" width={1200} className="app"> */}
      {/* <Card> */}
      {/* <Fixtures /> */}
      {/* <News /> */}
      {/* </Card> */}
      {/* </Box> */}

      {/* <Grid item xs={12} md={6} lg={4}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper>1</Paper>
          </Grid> */}
    </>
  );
}

export default App;
