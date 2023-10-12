import React, { Fragment } from "react";
import MiddleFooter from "./FooterParts/MiddleFooter";
import BottomFooter from "./FooterParts/BottomFooter";
import TopFooter from "./FooterParts/TopFooter";
import JoinUs from "./JoinUs";

function Footer() {
  return (
    <Fragment>
      <JoinUs />
      <footer className="page-footer" style={{ direction: "rtl" }}>
        <TopFooter />
        <MiddleFooter />
        <BottomFooter />
      </footer>
    </Fragment>
  );
}

export default Footer;
