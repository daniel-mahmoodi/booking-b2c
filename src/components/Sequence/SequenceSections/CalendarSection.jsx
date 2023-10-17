import React, { useState } from "react";
import Calendar from "../../Layout/Calendar";
import classes from "./SequenceSections.module.css";
const CalendarSection = ({ getDateHandler, userSelectedSanses }) => {
  const [haveDate, setHaveDate] = useState(false);
  const dateIsSelected = () => {
    setHaveDate(true);
  };
  return (
    <div className={classes.date}>
      <Calendar
        getDateFromCalendar={getDateHandler}
        dateIsSelected={dateIsSelected}
      />
      {!userSelectedSanses.length
        ? haveDate && (
            <p className={classes.dateDesc}>در این روز سانس وجود ندارد</p>
          )
        : ""}
    </div>
  );
};

export default CalendarSection;
