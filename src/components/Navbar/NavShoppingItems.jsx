import React, { Fragment } from "react";
import NavShoppingItem from "./NavShoppingItem";

const NavShoppingItems = ({ data }) => {

  return (
    <Fragment>
      {data.tickets.map((item) => (
        <NavShoppingItem
          key={item.ticketId}
          eventTitle={data.eventTitle}
          data={item}
          eventId={data.eventId}
        />
      ))}
    </Fragment>
  );
};

export default NavShoppingItems;
