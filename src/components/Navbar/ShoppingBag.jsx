import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { profileActions } from "../../store/profile-slice";
import NavShoppingItems from "./NavShoppingItems";
import classes from "./ShoppingBag.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartFlatbedSuitcase } from "@fortawesome/free-solid-svg-icons";
const ShoppingBag = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const items = useSelector((state) => state.basket.items);
  const totalQuantity = useSelector((state) => state.basket.totalQuantity);
  // const totalDiscountedPrice = useSelector(
  //   (state) => state.basket.totalDiscountedPrice
  // );

  const sendUserToBasketHandler = () => {
    history.push("/profile/basket");
    dispatch(profileActions.selectActiveTab("basket"));
  };
  return (
    <div onClick={sendUserToBasketHandler} className={classes.bagContainer}>
      <div className={classes.bagItem}>
      <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
      </div>
      {totalQuantity > 0 && (
        <span
          style={{
            backgroundColor: "#f44153",
            color: "white",
            borderRadius: "50%",
            width: "15px",
            height: "15px",
            fontSize: "12px",
            display: "inline-block",
            justifyContent: "center",
            textAlign: "center",
            position: "absolute",
            top: "0",
            right: "-10px",
          }}
        >
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default ShoppingBag;
