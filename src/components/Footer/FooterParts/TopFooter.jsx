import React from "react";
import FooterDescriptions from "./FooterDescriptions";
import AppDownload from "./AppDownload";
import FooterImportanLinks from "./FooterImportanLinks";
import classes from "./TopFooter.module.css";
const TopFooter = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <FooterDescriptions />
        <FooterImportanLinks />
        <AppDownload />
      </div>
    </div>
  );
};

export default TopFooter;
