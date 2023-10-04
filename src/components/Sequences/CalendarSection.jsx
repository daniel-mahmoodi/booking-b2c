import React from 'react'
import Calendar from '../Layout/Calendar'
import classes from "./SansesType.module.css";
const CalendarSection = ({getDateHandler,userSelectedSanses}) => {
  return (
     <div className={classes.date}>
     <Calendar getDateFromCalendar={getDateHandler} />
     {!userSelectedSanses.length ? (
       <p className={classes.dateDesc}>در این روز سانس وجود ندارد</p>
     ) : (
       ""
     )}
   </div>
  )
}

export default CalendarSection