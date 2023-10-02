import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavMenu.module.css";
const MainNavMenu = () => {
  return (
    <div className="page-header__mainmenu">
      <nav className="mainmenu" data-uk-navbar="">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink
              to="/home-page"
              className={classes.menuItem}
              activeClassName={classes.active}
              style={{ fontFamily: "iransans" }}
            >
              خانه
            </NavLink>
          </li>

          <li className={classes.divider}></li>
          <li>
            <NavLink
              to="/about"
              className={classes.menuItem}
              activeClassName={classes.active}
              style={{ fontFamily: "iransans" }}
            >
              درباره ما
            </NavLink>
          </li>
          <li className={classes.divider}></li>
          <li>
            <NavLink
              to="contact-us"
              className={classes.menuItem}
              activeClassName={classes.active}
              style={{ fontFamily: "iransans" }}
            >
              تماس با ما
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavMenu;
