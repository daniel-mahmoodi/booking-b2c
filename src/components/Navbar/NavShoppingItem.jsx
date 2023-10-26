import React from "react";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import { useState } from "react";
import { useEffect } from "react";
const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const NavShoppingItem = ({ data, eventId, eventTitle }) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    if (data.imageUrl) {
      setImage(`${IMGUrl}${data.imageUrl.replace("..", "")}`);
    }
  }, [data.imageUrl, data]);
  const dispatch = useDispatch();
const eraseItemHandler = () => {
    dispatch(
      basketActions.eraseItemFromBasket({
        ticketId: data.ticketId,
        eventId: eventId,
      })
    );
  };
  return (
    <div className="item">
      <img src={image} alt="" />
      <div className="p-2">
        <p className="m-0 fw-md title" style={{ fontSize: "10px" }}>
          {eventTitle}
        </p>
        <p className="m-0 description">{data.ticketTitle}</p>
      </div>
      <span onClick={eraseItemHandler} className="delete">
        <i className="fa fa-times" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default NavShoppingItem;
