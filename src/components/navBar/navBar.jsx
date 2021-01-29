import { Typography } from "@material-ui/core";
import React from "react";
import Logo from "../../assets/images/logo.png";
import Home from "../../assets/images/home.png";
import Entries from "../../assets/images/entries.png";
import Division from "../../assets/images/division.png";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import Bell from "../../assets/images/bell.png";
import Person from "../../assets/images/person.png";
import Path from "../../assets/images/Path.png";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
export default function NavBar() {
  const classes = useStyles();
  return (
    <header className="nav-bar">
      <span className="logo" className="logo-span">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "32px", height: "27px" }}
        ></img>
      </span>
      <Typography className="brand-name">FE Engineer Test 1</Typography>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <span className="icon-nav">
              <img src={Home} alt="icon"></img>
            </span>
            <a>Home</a>
          </li>
          <li className="nav-li">
            <span className="icon-nav">
              <img src={Entries} alt="icon"></img>
            </span>{" "}
            <a>Entries</a>
          </li>
          <li className="nav-li active-nav">
            <span className="icon-nav">
              <img src={Division} alt="icon"></img>
            </span>{" "}
            <a>Divisions</a>
          </li>
        </ul>
      </nav>
      <div>
        <div className={(classes.search, "search-div")}>
          <div className={classes.searchIcon}>
            <SearchIcon className="search-icon" />
          </div>
          <InputBase
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            className="input-search"
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
      <span className="bell-logo">
        <img
          src={Bell}
          alt="bell-logo"
          style={{ width: "15px", height: "17px" }}
        />
      </span>
      <div className="icon-and-dropdown">
        <div className="person-icon-cover">
          <img src={Person} alt="person-logo"></img>
        </div>
        <img src={Path} alt="logo" className="path-logo" />
      </div>
    </header>
  );
}
