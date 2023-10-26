import React from "react";
import MainNavMenu from "./MainNavMenu/MainNavMenu";
import NavLogo from "./NavLogo";
// import UserInfoSticky from "./UserInfoSticky";
import ShoppingBag from "./ShoppingBag";
import NavSignInButton from "./NavSignInButton";
import NavSearch from "./NavSearch";
import HomeInMobile from "./HomeInMobile";
import HambergerMobileButton from "./HambergerMobileButton";

function NavbarHeader() {
  return (
    <header className="page-header" style={{ direction: "rtl" }}>
      <div
        className="page-header__scroll"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div className="uk-container uk-container-xlarge">
          <div className="page-header__inner" style={{ padding: "10px 0" }}>
            <div className="page-header__right">
              <NavLogo />
              <MainNavMenu />
            </div>
            <div className="page-header__left">
              {/* <NavSearch /> */}
              {/* <HomeInMobile /> */}
              <ShoppingBag />
              <NavSignInButton />
              <HambergerMobileButton />
              
            </div>
          </div>
        </div>
      </div>
      {/* <UserInfoSticky /> */}
    </header>
  );
}

export default NavbarHeader;
