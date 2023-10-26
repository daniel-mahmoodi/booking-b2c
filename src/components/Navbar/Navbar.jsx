import React, { Fragment, useEffect, useState } from "react";
import Catalog from "../Catalog/Catalog";
import NavbarHeader from "./NavbarHeader";
import classes from "./Navbar.module.css";
const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.scrollY >= 84 ? true : false);
      return () => (window.onscroll = null);
    };
  }, []);
  return (
    <Fragment>
      <div className={stickyNav ? classes.header : ""}>
        <NavbarHeader />
      </div>
      <div className={stickyNav ? classes.sticky : classes.catalog}>
        <Catalog />
      </div>
    </Fragment>
  );
};

export default Navbar;
