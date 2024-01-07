import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavLogo.module.css";
import Logo from "../Layout/Logo";
const NavLogo = () => {
  return (
    <div className={classes.body}>
      <Link to="/home" className={classes.logo}>
        <Logo/>
      </Link>
    </div>
  );
};

export default NavLogo;
