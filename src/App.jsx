import React, { useState, useEffect } from "react";

import { Typography, Box, Card } from "@mui/material";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Fixtures from "./components/Fixtures";

function App() {
  return (
    <>
      <CssBaseline />
      <Box mt={2} ml="auto" mr="auto" width={1200} className="app">
        <Card>
          <Typography variant="h2" align="center">
            Today is results
          </Typography>
          <hr />
          <Fixtures />
        </Card>
      </Box>
    </>
  );
}

export default App;
