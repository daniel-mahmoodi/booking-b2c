import React from "react";
import classes from "./Sanses.module.css";
import Sans from "./Sans";
const Sanses = ({ data }) => {
  console.log("sanses data", data);
  return (
    
      <div className={classes.table}>
        <div className={classes.row}>
          <div>
            <ion-icon
              class={classes.icon}
              name="calendar-clear-outline"
            ></ion-icon>
            <div className={classes.markerLine}></div>
          </div>
          <div>{data.executeDateTime}</div>
          <div className={classes.sansesList}>
            {data.sansList.map((sans) => (
              <Sans key={sans.id} sansData={sans} />
            ))}
          </div>
        </div>
      </div>

  );
};

export default Sanses;
