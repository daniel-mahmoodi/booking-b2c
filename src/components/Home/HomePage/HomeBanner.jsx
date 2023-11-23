import React from "react";
import classes from "./HomeBanner.module.css";
const HomeBanner = () => {
  return (
    <div className={classes.body}>
      <img
        className={classes.image}
        src="/assets/img/kish-banner.jpg"
        alt="home-banner"
      />
    </div>
  );
};

export default HomeBanner;
