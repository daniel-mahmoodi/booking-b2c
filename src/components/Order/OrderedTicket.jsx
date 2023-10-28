import React from "react";
import classes from "./OrderedTicket.module.css";
import { ticketStatus } from "../Utilities/Utils";
const OrderedTicket = ({ ticket }) => {
 
  return (
    <div className={classes.body}>
      <div
        className={`${classes.status} ${
          ticket.status === 0
            ? classes.yellow
            : ticket.status === 1
            ? classes.green
            : ticket.status === 2
            ? classes.red
            : classes.gray
        }`}
      ></div>
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

export default OrderedTicket;
