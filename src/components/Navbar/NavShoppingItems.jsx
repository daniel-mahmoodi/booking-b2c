import React, { Fragment } from "react";
import NavShoppingItem from "./NavShoppingItem";

const NavShoppingItems = ({ data }) => {
  console.log("datain nabshop NavShoppingItems", data);


  return (
    <Fragment>
      {data.tickets.map((item) => (
        <NavShoppingItem
          key={item.ticketId}
          data={item}
          eventId={data.eventId}
        />
      ))}
    </Fragment>
  );
};

export default NavShoppingItems;
