import React, { useEffect, useState } from "react";
import classes from "./BasketItem.module.css";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import IncreaseDecreaseButton from "../Layout/IncreaseDecreaseButton";
import TicketPricing from "../Events/TicketPricing";
import Capacity from "../Events/Capacity";
import moment from "jalali-moment";
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
  // Input time in UTC format
  const inputTime = data.executeDate;

  // Create a Date object from the input time
  const date = new Date(inputTime);

  // Convert the time to the local time
  // const localTime = date.toLocaleString();
  const options = {
    // year: "numeric",
    // month: "long",
    // day: "numeric",
    // timeZoneName: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const localTime = date.toLocaleString(undefined, options);

  return (
    <div className={classes.dataBlock}>
      <div
        className={`${classes.firstColumn} justify-center mb-2 ${classes.row}`}
        style={{ position: "relative" }}
      >
        <div className={classes.colAuto}>
          <div onClick={eraseItemHandler} className="close">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>
        <div className={classes.colAuto}>
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            className={classes.img}
          ></div>
        </div>
        <div className={classes.colAuto}>
          <div className={classes.desc}>
            <div className={classes.descTitle}>{data.ticketTitle}</div>
            <div className={classes.descTitle}>{data.sansTitle}</div>
            <div className={classes.descTitle}>
              {data.executeDate &&
                moment(data.executeDate.split(" ")[0], "MM/DD/YYYY")
                  .locale("fa")
                  .format("YYYY/MM/DD")}
            </div>
            <div className={classes.descTitle}> {localTime}</div>
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
              <span className="without-off-price">
                {Number(data.price).toLocaleString()} تومان
              </span>
              <br />
            </>
          ) : (
            <span className="off-price">
              {Number(data.discountedPrice).toLocaleString()} تومان
            </span>
          )}
        </div>
      </div>
      <IncreaseDecreaseButton data={data} eventId={eventId} />
      <div className={`${classes.column} total-price-container`}>
        <div className={`"title" ${classes.title}`}>قیمت کل : </div>
        <div>
          <span className="price">
            {Number(data.count * data.discountedPrice).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
