import React from "react";
import classes from "./Ticket.module.css";
import IncreaseDecreaseButton from "../Layout/IncreaseDecreaseButton";
import TicketPricing from "./TicketPricing";
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
          <TicketPricing ticketDetails={ticketDetails} />
        </>
      )}
    </div>
  );
};

export default Ticket;
