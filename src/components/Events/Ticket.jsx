import React from "react";
import classes from "./Ticket.module.css";
import IncreaseDecreaseButton from "../Layout/IncreaseDecreaseButton";
const Ticket = ({ ticketDetails, eventId, sansSelectedTitle }) => {
  return (
    <div className={classes.body}>
      {eventId && (
        <>
          <div className="basket">
            <IncreaseDecreaseButton
              data={ticketDetails}
              eventId={eventId}
              sansSelectedTitle={sansSelectedTitle}
            />
          </div>
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
        </>
      )}
    </div>
  );
};

export default Ticket;
