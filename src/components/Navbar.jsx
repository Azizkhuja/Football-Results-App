import React from "react";
import { Typography, AppBar, Toolbar, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ borderRadius: "10px" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Results
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
