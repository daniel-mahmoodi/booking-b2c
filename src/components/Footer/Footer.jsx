import React, { Fragment } from "react";
import MiddleFooter from "./FooterParts/MiddleFooter";
import BottomFooter from "./FooterParts/BottomFooter";
import TopFooter from "./FooterParts/TopFooter";
import JoinUs from "./JoinUs";
import classes from './Footer.module.css'
function Footer() {
  return (
    <div className={classes.body}>
      {/* <JoinUs /> */}
      <div className={classes.container}>
        <TopFooter />
        <MiddleFooter />
        <BottomFooter />
      </div>
    </div>
  );
}

export default Footer;
