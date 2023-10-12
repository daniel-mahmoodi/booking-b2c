import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import NavShoppingItem from "./NavShoppingItem";
import { useState } from "react";
import { useEffect } from "react";
const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const NavShoppingItems = ({ data }) => {
  console.log("datain nabshop", data);
  const [image, setImage] = useState("");
  useEffect(() => {
    if (data.tickets.imageUrl) {
      // setImage(`${IMGUrl}${data.imageUrl.replace("..", "")}`);
    }
  }, [data.imageUrl, data.tickets]);
  const dispatch = useDispatch();
  const eraseItemHandler = () => {
    dispatch(
      basketActions.eraseItemFromBasket({
        ticketId: data.tickets.ticketId,
        eventId: data.eventId,
      })
    );
  };
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
