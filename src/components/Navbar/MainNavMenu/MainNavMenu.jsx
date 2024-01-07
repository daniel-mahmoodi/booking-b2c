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
    <div className={classes.body}>
      <nav className={classes.container}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/home"
              className={classes.menuItem}
              activeClassName={classes.active}
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
            >
             مرکز پشتیبانی آنلاین
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavMenu;
