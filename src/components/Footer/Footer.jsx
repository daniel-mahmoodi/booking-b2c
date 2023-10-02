import React from "react";
import MiddleFooter from "./FooterParts/MiddleFooter";
import BottomFooter from "./FooterParts/BottomFooter";
import TopFooter from "./FooterParts/TopFooter";

function Footer() {
  return (
    <footer className="page-footer" style={{ direction: "rtl" }}>
      <TopFooter />
      <MiddleFooter />
      <BottomFooter />
      {/* <OffcanvasMenu /> */}
    </footer>
  );
}

export default Footer;
