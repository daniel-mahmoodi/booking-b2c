import React, { Fragment } from "react";
import Ticket from "../Events/Ticket";
import MyLoading from "../Layout/MyLoading";
import classes from "./SansesType.module.css";

const TicketSection = ({
  ticketLoading,
  showTicketComponent,
  ticketDetails,
}) => {
  return (
    <Fragment>
      {!ticketLoading ? (
        showTicketComponent && (
          <div className={classes.ticket}>
            <Ticket ticketDetails={ticketDetails} />
          </div>
        )
      ) : (
        <div className={classes.loading}>
          <MyLoading color={"#000301"} />
        </div>
      )}
    </Fragment>
  );
};

export default TicketSection;
