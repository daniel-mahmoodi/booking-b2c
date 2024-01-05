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
function navbar() {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <div className={classes.rightHeader}>
          <NavLogo />
          <MainNavMenu />
        </div>
        <div className={classes.leftHeader}>
          {/* <NavSearch /> */}
          {/* <HomeInMobile /> */}
          <ShoppingBag />
          <NavSignInButton />
          <HambergerMobileButton />
        </div>

        {/* <UserInfoSticky /> */}
      </div>
    </div>
  );
}

export default navbar;
