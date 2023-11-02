import React from "react";
import classes from "./Ticket.module.css";
import Capacity from "./Capacity";
const TicketPricing = ({ ticketDetails }) => {
  console.log("ticketDetails", ticketDetails);
  return (
    <div className={classes.desc}>
      {ticketDetails.discountedPrice === ticketDetails.price ? (
        <div className={classes.firstChild}>
          <p className={classes.firstChild}>{`${"قیمت"}:`}</p>
          <p className={classes.lastChild}>{` ${ticketDetails.price}`}</p>
        </div>
      ) : (
        <>
          <div className={classes.oldPrice}>
            <p>{`قیمت:`}</p>
            <p>{` ${ticketDetails.price}`}</p>
          </div>
          <div className={classes.lastChild}>
            <p>{`قیمت با تخفیف:`}</p>
            <p className={classes.lastChild}>{`${Number(
              ticketDetails.discountedPrice
            ).toLocaleString()}`}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default TicketPricing;
