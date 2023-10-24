import React from "react";
import classes from "./FirstSectionBanner.module.css";

function FirstSectionBanner() {
  return (
    <div className="section-banner-1">
      <div className="uk-container uk-margin-large-bottom">
        <div className={classes.banner1}>
          <div className={`${classes.item} shine`}>
            <a href="/" style={{ display: "block" }}>
              <img src="/assets/img/banner/1.jpg" alt="" />
            </a>
          </div>
          <div className={`${classes.item} shine`}>
            <a href="/" style={{ display: "block" }}>
              <img src="/assets/img/banner/2.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstSectionBanner;
