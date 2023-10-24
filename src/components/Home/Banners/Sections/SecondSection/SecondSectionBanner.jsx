import React from "react";
import classes from './SecondSectionBanner.module.css'
function SectionBanner2() {
  return (
    <div className="section-banner-2">
      <div
        className="uk-container uk-margin-large-bottom"
        style={{ marginTop: "70px" }}
      >
        <div className={classes.banner2}>
          <div className={`${classes.item} shine`}>
            <a href="/" style={{ display: "block" }}>
              <img src="/assets/img/banner/3.jpg" alt="" />
            </a>
          </div>
          <div className={`${classes.item} shine`}>
            <a href="/" style={{ display: "block" }}>
              <img src="/assets/img/banner/4.jpg" alt="" />
            </a>
          </div>
          <div className={`${classes.item} shine`}>
            <a href="/" style={{ display: "block" }}>
              <img src="/assets/img/banner/5.jpg" alt="" />
            </a>
          </div>
          <div className={`${classes.item} shine`}>
            <a href="/" style={{ display: "block" }}>
              <img src="/assets/img/banner/6.jpg" alt="" />
            </a>
          </div>
          <div className={`${classes.item} shine`}>
            <a href="/" style={{ display: "block" }}>
              <img src="/assets/img/banner/7.jpg" alt="" />
            </a>
          </div>
          <div className={`${classes.item} shine`}>
            <a href="/" style={{ display: "block" }}>
              <img src="/assets/img/banner/8.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBanner2;
