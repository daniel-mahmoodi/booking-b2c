import React, { Fragment } from "react";

import BasketItem from "./BasketItem";

const EventList = ({ items }) => {
  console.log("items in event", items);
  return (
    <Fragment>
      {items?.tickets.map((item) => (
        <BasketItem key={item.id} data={item} eventId={items.eventId} />
      ))}
    </Fragment>
  );
};

export default EventList;
