import React from "react";
import classes from "./Capacity.module.css";
const Capacity = ({ capacity }) => {
  return (
    <div className={classes.body}>
      <p className={classes.title}>{`${"موجودی"}:`}</p>
      <p className={classes.capacity}>{` ${capacity}`}</p>
    </div>
  );
};

export default Capacity;
