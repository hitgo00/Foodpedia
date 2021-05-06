import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import CssBaseline from "@material-ui/core/CssBaseline";

import { GoogleLogout } from "react-google-login";
import {
  signOut,
  useUserDispatch,
  useUserState,
} from "../../Context/UserContext";
import { Button } from "@material-ui/core";

const pages = [
  {
    label: "Search Page",
    link: "/search",
  },
  {
    label: "Home Page",
    link: "/",
  },
  {
    label: "Profile",
    link: "/profile",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    // bottom: theme.spacing(2),
    // right: theme.spacing(2),
  },
  roottoolbar: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  var userDispatch = useUserDispatch();
  const { isAuthenticated } = useUserState();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <FastfoodIcon />
            </IconButton>
          </Link>
          <Typography variant="h5" className={classes.title}>
            Foodpedia
          </Typography>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/search">
              <Button variant="text">
                <Typography style={{ color: "white" }}>Search</Typography>
              </Button>
            </Link>
            {isAuthenticated && (
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            )}

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <Link to="/profile">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>
                <GoogleLogout
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  buttonText="Logout"
                  onLogoutSuccess={() => {
                    signOut(userDispatch, props.history);
                  }}
                />
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
    // <div style={{
    //     zIndex:"100",
    //     width: "100%",
    //     backgroundColor:"blue",
    //     opacity:"1",
    //     height: "3rem",
    //     color: "white",
    //     position:"sticky",
    //     top:"0px",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    // }}>
    //   {pages.map((page) => (
    //     <Link to={page.link} key={page.label}>
    //       <div style={{padding:"8px"}}> {page.label}</div>
    //     </Link>
    //   ))}
    // </div>
  );
}

export default Navbar;
