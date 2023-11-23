import React, { Fragment, useEffect, useState } from "react";
import Catalog from "../Catalog/Main/Catalog";
import NavbarHeader from "./NavbarHeader";
import classes from "./Navbar.module.css";
const Navbar = () => {
  // const [stickyNav, setStickyNav] = useState(false);
  // const [stickyOnTop, setStickyOnTop] = useState(false);
  // const [height, setHeight] = useState(false);
  // useEffect(() => {
  //   window.onscroll = () => {
  //     setStickyOnTop(window.scrollY >= 84 ? true : false);
  //     if (height < window.scrollY && stickyOnTop) {
  //       setStickyNav(false);
  //     } else {
  //       setStickyNav(true);
  //     }
  //     setHeight(window.scrollY);
  //     return () => (window.onscroll = null);
  //   };
  // }, [height, stickyNav, stickyOnTop]);
  return (
    <Fragment>
      {/* <div className={stickyOnTop ? classes.header : ""}> */}
      <div className={classes.header}>
        <NavbarHeader />
      </div>
      {/* <div
        className={`${stickyNav ? classes.sticky : classes.catalog} ${
          !stickyOnTop ? classes.stickyOnTop : ""
        }`}
      >
        <Catalog />
      </div> */}
    </Fragment>
  );
};

export default Navbar;
