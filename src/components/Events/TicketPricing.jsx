import React from "react";
import classes from "./Ticket.module.css";
const TicketPricing = ({ticketDetails}) => {
  return (
    <div className={classes.desc}>
      {ticketDetails.discountedPrice === ticketDetails.price ? (
        <div>
          <p>{`${"قیمت"}:`}</p>
          <p>{` ${ticketDetails.price}`}</p>
        </div>
      ) : (
        <>
          <div className={classes.oldPrice}>
            <p>{`قیمت:`}</p>
            <p>{` ${ticketDetails.price}`}</p>
          </div>
          <div>
            <p>{`قیمت با تخفیف:`}</p>
            <p>{`${ticketDetails.discountedPrice}`}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default TicketPricing;
