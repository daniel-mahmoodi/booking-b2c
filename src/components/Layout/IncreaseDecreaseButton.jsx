import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import classes from "./IncreaseDecreaseButton.module.css";
// import useCheckStock from "../Hook/useCheckStock";
const IncreaseDecreaseButton = ({ data, eventId }) => {
  const dispatch = useDispatch();
  // const [basketItemPlusOneItem, setTicketExist] = useState();
  const basketItems = useSelector((state) => state.basket.items);
  const serviceDetails = useSelector((state) => state.event.serviceDetails);
  // const checkStockHook = useCheckStock(data.id,data.capacity);
  const serviceExist = basketItems.find((event) => event.eventId === eventId);
  // console.log("serviceExist", serviceExist);
  console.log(" basketItems,data,eventId", basketItems, data, eventId);
  const basketItemPlusOneItem =
    serviceExist &&
    serviceExist.tickets?.find((item) => item.ticketId === data.ticketId);
  // console.log("basketItemPlusOneItem", basketItemPlusOneItem);
  console.log(
    " serviceExist,basketItemPlusOneItem",
    serviceExist,
    basketItemPlusOneItem
  );
  console.log("datta", data);
  // const remainedCapacity = basketItemPlusOneItem
  //   ? data.capacity - basketItemPlusOneItem.count
  //   : data.capacity;
  // console.log("data , remainedCapacity", data, remainedCapacity);
  const addItemHandler = () => {
    // if (remainedCapacity > 0) {
    if (eventId) {
      dispatch(
        basketActions.addItemToBasket({
          eventId: eventId,
          eventTitle: serviceDetails.eventName,
          tickets: { ...data, count: 1, imageUrl: serviceDetails.imageUrl},
        })
      );
    }
    // }
  };

  const removeItemHandler = () => {
    if (basketItemPlusOneItem && eventId) {
      dispatch(
        basketActions.removeItemFromBasket({ ticketId: data.ticketId, eventId })
      );
    }
  };
  return (
    <div className="count-container mt-2">
      <div className="wrapper">
        <div>
          <span onClick={removeItemHandler} className="btn">
            <span className="item">-</span>
          </span>
          <span className="display">
            <span data-id="9" data-cart-count="" className="item">
              {basketItemPlusOneItem ? basketItemPlusOneItem.count : 0}
            </span>
          </span>
          <span onClick={addItemHandler} className="btn">
            <span className="item">+</span>
          </span>
        </div>
        {/* <p className={classes.capacity}>{`ظرفیت: ${remainedCapacity}`}</p> */}
      </div>
    </div>
  );
};

export default IncreaseDecreaseButton;
