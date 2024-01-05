import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavLogo.module.css";
const NavLogo = () => {
  return (
    <div className={classes.body}>
      <Link to="/home" className={classes.logo}>
        <img src="/assets/img/takish-logo.png" alt="logo" />
      </Link>
    </div>
  );
};

export default NavLogo;
