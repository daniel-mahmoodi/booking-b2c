import React from "react";
import classes from "./AppDownload.module.css";
const AppDownload = () => {
  return (
    <div className={classes.body}>
      <h3 className={classes.title}>نصب اپلیکیشن</h3>
      <div className={classes.image}>
        <img src="/assets/img/PlayStore.svg" alt="PlayStore" />
      </div>
    </div>
  );
};

export default AppDownload;
