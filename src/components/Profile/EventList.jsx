import React, { Fragment } from "react";
import classes from "./EventList.module.css";
import BasketItem from "./BasketItem";

const EventList = ({ items }) => {
  return (
    <Fragment>
      <div className={classes.title}>{items.eventTitle}</div>
      {items?.tickets.map((item) => (
        <BasketItem key={item.id} data={item} eventId={items.eventId} />
      ))}
    </Fragment>
  );
};

export default EventList;
