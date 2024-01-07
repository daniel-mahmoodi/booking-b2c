import React from "react";
import MainNavMenu from "./MainNavMenu/MainNavMenu";
import NavLogo from "./NavLogo";
// import UserInfoSticky from "./UserInfoSticky";
import ShoppingBag from "./ShoppingBag";
import NavSignInButton from "./NavSignInButton";
import NavSearch from "./NavSearch";
import HomeInMobile from "./HomeInMobile";
import HambergerMobileButton from "./HambergerMobileButton";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainCity } from "@fortawesome/free-solid-svg-icons";
function navbar() {
  return (
    <div className={classes.navBody}>
      <div className={classes.headerBody}>
        <div className={classes.Headerontainer}>
          <div className={classes.rightHeader}>
            <NavLogo />
            <MainNavMenu />
          </div>
          <div className={classes.leftHeader}>
            <div className={classes.webIcons}>
              <ShoppingBag />
              <NavSignInButton />
            </div>
            <HambergerMobileButton />
          </div>
        </div>
      </div>
      <div className={classes.bottomStickContainer}>
        <ul className={classes.bottomList}>
          <Link to="/home" className={classes.bottomListItem}>
            <FontAwesomeIcon
              className={classes.bottomListIcon}
              icon={faMountainCity}
            />
            <span className={classes.bottomListIconDesc}>خانه</span>
          </Link>
          <div className={classes.bottomListItem}>
            <ShoppingBag />
            <span className={classes.bottomListIconDesc}>سفارشات</span>
          </div>
          <div className={classes.bottomListItem}>
            <NavSignInButton />
            {/* <span>حساب کاربری</span> */}
          </div>
        </ul>
      </div>
      {/* <UserInfoSticky /> */}
    </div>
  );
}

export default navbar;
