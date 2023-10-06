import React from "react";
import classes from "./BasketItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import IncreaseDecreaseButton from "../Layout/IncreaseDecreaseButton";

const BasketItem = ({ data }) => {
  const dispatch = useDispatch();
  const eraseItemHandler = () => {
    dispatch(basketActions.eraseItemFromBasket(data.id));
  };
  return (
    <div className={classes.dataBlock}>
      {/* Repeat this block for each item in the basket */}
      <div className="row justify-center mb-2" style={{ position: "relative" }}>
        <div className="col-auto">
          <div onClick={eraseItemHandler} className="close">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-auto">
          <div
            style={{
              backgroundImage: "url(assets/img/bg-banner-blog-grid.jpg)",
            }}
            className="img"
          ></div>
        </div>
        <div className="col-auto">
          <div className="d-flex justify-center">
            <a className="title">لورم ایپسوم متن ساختگی با</a>
          </div>
          {/* <div className="d-flex justify-center">
            <p>تاریخ رزرو : ۱۳۹۷/۰۱/۰۲</p>
          </div> */}
        </div>
      </div>
      <div className="unit-price">
        <div className={`"title" ${classes.title}`}>قیمت واحد : </div>
        <div>
          <span className="without-off-price">{data.price} تومان</span>
          <br />
          <span className="off-price">{data.discountedPrice} تومان</span>
        </div>
      </div>
      <IncreaseDecreaseButton data={data.ticket} />
      <div className="total-price-container">
        <div className={`"title" ${classes.title}`}>قیمت کل : </div>
        <div>
          <span className="price">{data.quantity * data.discountedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
