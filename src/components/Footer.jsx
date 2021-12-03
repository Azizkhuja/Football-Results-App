import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  let fullYear = new Date().getFullYear();
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        marginTop: "5px",
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          Football Statistics {fullYear}&copy;
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
