import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import classes from "./IncreaseDecreaseButton.module.css";
import useCheckStock from "../Hook/useCheckStock";
import Capacity from "../Events/Capacity";
const IncreaseDecreaseButton = ({ data, eventId, sansSelectedTitle }) => {
  const dispatch = useDispatch();
  // const [basketItemPlusOneItem, setTicketExist] = useState();
  const basketItems = useSelector((state) => state.basket.items);
  const serviceDetails = useSelector((state) => state.event.serviceDetails);
  console.log("data", data, serviceDetails);
  // const checkStockHook = useCheckStock(data.id,data.capacity);
  const serviceExist = basketItems.find((event) => event.eventId === eventId);
  const basketItemPlusOneItem =
    serviceExist &&
    serviceExist.tickets?.find((item) => item.ticketId === data.ticketId);
  const remainedCapacity = basketItemPlusOneItem
    ? data.capacity - basketItemPlusOneItem.count
    : data.capacity;
  const addItemHandler = () => {
    if (remainedCapacity > 0) {
      if (eventId) {
        dispatch(
          basketActions.addItemToBasket({
            eventId: eventId,
            eventTitle: serviceDetails.eventName,
            tickets: {
              ...data,
              count: 1,
              capacity: data.capacity,
              ticketTitle: serviceDetails.serviceName,
              sansTitle: sansSelectedTitle,
              imageUrl: serviceDetails.imageUrl,
            },
          })
        );
      }
    }
  };

  const removeItemHandler = () => {
    if (basketItemPlusOneItem && eventId) {
      dispatch(
        basketActions.removeItemFromBasket({ ticketId: data.ticketId, eventId })
      );
    }
  };
  return (
    <>
      <div className={`${classes.countContainer} mt-2`}>
        <div className={classes.wrapper}>
          <div>
            <span onClick={removeItemHandler} className={classes.btn}>
              <span className={classes.item}>-</span>
            </span>
            <span className={classes.display}>
              <span data-id="9" data-cart-count="" className={classes.item}>
                {basketItemPlusOneItem ? basketItemPlusOneItem.count : 0}
              </span>
            </span>
            <span onClick={addItemHandler} className={classes.btn}>
              <span className={classes.item}>+</span>
            </span>
          </div>
          {/* <p className={classes.capacity}>{`ظرفیت: ${remainedCapacity}`}</p> */}
        </div>
        <Capacity capacity={data.capacity} />
      </div>
    </>
  );
};

export default IncreaseDecreaseButton;
