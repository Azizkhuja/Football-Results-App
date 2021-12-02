import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Avatar from "@mui/material/Avatar";
import { Typography, AppBar, Toolbar, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../server/firebaseConfig";

const Navbar = () => {
  const NavbarTitle = useMediaQuery("(max-width: 375px)");
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (user) setUser(user);
      else setUser(null);
      setUser(currentUser);
    });
  }, []);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const logOut = async () => {
    await signOut(auth);
  };
  return (
    <AppBar position="static" sx={{ borderRadius: "10px" }}>
      <Toolbar>
        <Typography>
          <Link to="/" className="header-logo">
            <SportsSoccerIcon sx={{ fontSize: 40 }} />
          </Link>
        </Typography>
        <Typography variant={NavbarTitle ? "button" : "subtitle1"}>
          <Link to="/news" className="header-logo">
            News
          </Link>
        </Typography>
        <Typography
          variant={NavbarTitle ? "button" : "subtitle1"}
          sx={{ flexGrow: 1 }}
        >
          <Link to="/results" className="header-logo">
            Results
          </Link>
        </Typography>

        {user ? (
          <>
            <Avatar alt="Remy Sharp" src={user?.photoURL} />
            <Button color="inherit" onClick={logOut}>
              Log Out
            </Button>
          </>
        ) : (
          <Button color="inherit" onClick={signInWithGoogle}>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
