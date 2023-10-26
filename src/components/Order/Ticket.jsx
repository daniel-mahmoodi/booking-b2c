import React from "react";
import classes from "./Ticket.module.css";
import { ticketStatus } from "../Utilities/Utils";
const Ticket = ({ ticket }) => {
  return (
    <div className={classes.body}>
      <div className={`${classes.item} ${classes.ticketName}`}>
        <div className={classes.title}>عنوان:</div>
        <div className={classes.data}>{ticket.ticketName}</div>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>قیمت:</div>
        <div className={classes.data}>{ticket.price}</div>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>وضعیت:</div>
        <div className={classes.data}>{ticketStatus[ticket.status]}</div>
      </div>
    </div>
  );
};

export default Ticket;
