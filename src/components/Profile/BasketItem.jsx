import React, { useEffect, useState } from "react";
import classes from "./BasketItem.module.css";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import IncreaseDecreaseButton from "../Layout/IncreaseDecreaseButton";
const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
// const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const BasketItem = ({ data, eventId }) => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (data.imageUrl) {
      setImageUrl(`${IMGUrl}${data.imageUrl.replace("..", "")}`);
    }
  }, [data.imageUrl]);
  const eraseItemHandler = () => {
    dispatch(
      basketActions.eraseItemFromBasket({ ticketId: data.ticketId, eventId })
    );
  };
  console.log("data in baketitems", data);
  return (
    <div className={classes.dataBlock}>
      <div
        className={`${classes.firstColumn} row justify-center mb-2`}
        style={{ position: "relative" }}
      >
        <div className="col-auto">
          <div onClick={eraseItemHandler} className="close">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div className="col-auto">
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            className="img"
          ></div>
        </div>
        <div className="col-auto">
          <div className="d-flex flex-column justify-center">
            <a className="title">{data.ticketTitle}</a>
            <a className="title">{data.sansTitle}</a>
          </div>
          {/* <div className="d-flex justify-center">
            <p>تاریخ رزرو : ۱۳۹۷/۰۱/۰۲</p>
          </div> */}
        </div>
      </div>
      <div className={`${classes.column} unit-price`}>
        <div className={`"title" ${classes.title}`}>قیمت واحد : </div>
        <div>
          {data.price !== data.discountedPrice ? (
            <>
              <span className="without-off-price">{data.price} تومان</span>
              <br />
            </>
          ) : (
            <span className="off-price">{data.discountedPrice} تومان</span>
          )}
        </div>
      </div>
      <IncreaseDecreaseButton data={data} eventId={eventId} />
      <div className={`${classes.column} total-price-container`}>
        <div className={`"title" ${classes.title}`}>قیمت کل : </div>
        <div>
          <span className="price">{data.count * data.discountedPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
