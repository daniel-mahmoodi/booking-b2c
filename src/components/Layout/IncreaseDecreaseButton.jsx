import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import classes from "./IncreaseDecreaseButton.module.css";
// import useCheckStock from "../Hook/useCheckStock";
const IncreaseDecreaseButton = ({ data, eventId }) => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);
  const listOfSanses = useSelector((state) => state.event.listOfSanses);
  // const checkStockHook = useCheckStock(data.id,data.capacity);
  const basketItemPlusOneItem = basketItems?.find(
    (item) => item.ticket.id === data.id
  );
  console.log("listOfSanses", listOfSanses);
  const remainedCapacity = basketItemPlusOneItem
    ? data.capacity - basketItemPlusOneItem.quantity
    : data.capacity;
  console.log("id", basketItems, data);
  const addItemHandler = () => {
    if (remainedCapacity > 0) {
      dispatch(
        basketActions.addItemToBasket({
          quantity: 1,
          ...data,
        })
      );
    }
  };

  const removeItemHandler = () => {
    if (basketItemPlusOneItem) {
      dispatch(basketActions.removeItemFromBasket(data.id));
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
              {basketItemPlusOneItem ? basketItemPlusOneItem.quantity : 0}
            </span>
          </span>
          <span onClick={addItemHandler} className="btn">
            <span className="item">+</span>
          </span>
        </div>
        <p className={classes.capacity}>{`ظرفیت: ${remainedCapacity}`}</p>
      </div>
    </div>
  );
};

export default IncreaseDecreaseButton;
