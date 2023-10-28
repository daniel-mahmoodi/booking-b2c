import React from "react";
import Ticket from "./OrderedTicket";
import classes from './OrderedTickets.module.css'
const OrderedTickets = ({ data }) => {
  return (
    <div className={classes.body}>
      {data ? (
        <div className={classes.tickets}>
          {data.map((item) => (
            <Ticket key={item.id} ticket={item} />
          ))}
        </div>
      ) : (
        <div>هیچ سرویسی خریداری نکرده اید.</div>
      )}
    </div>
  );
};

export default OrderedTickets;
