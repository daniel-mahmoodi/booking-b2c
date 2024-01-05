import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavMenu.module.css";
import { useDispatch } from "react-redux";
import { profileActions } from "../../../store/profile-slice";
const MainNavMenu = () => {
  const dispatch = useDispatch();
  const changeProfileTabHandler = () => {
    dispatch(profileActions.selectActiveTab("orders"));
  };
  return (
    <div className="page-header__mainmenu">
      <nav className="mainmenu" data-uk-navbar="">
        <ul className="uk-navbar-nav">
          <li>
            <NavLink
              to="/home"
              className={classes.menuItem}
              activeClassName={classes.active}
              style={{ fontFamily: "iransans" }}
            >
              خانه
            </NavLink>
          </li>
          <li className={classes.divider}></li>
          <li onClick={changeProfileTabHandler}>
            <NavLink
              to="/profile/orders"
              className={classes.menuItem}
              activeClassName={classes.active}
              style={{ fontFamily: "iransans" }}
            >
              سفارشات
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
