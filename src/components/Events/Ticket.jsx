import React, { Fragment, useState } from "react";
import classes from "./Ticket.module.css";
import IncreaseDecreaseButton from "../Layout/IncreaseDecreaseButton";
const Ticket = ({ ticketDetails,eventId }) => {
 
  return (
    <div className={classes.body}>
      <div className="basket">
        <IncreaseDecreaseButton data={ticketDetails} eventId={eventId} />
      </div>
      {/* <div className={classes.buttons}>
        <div onClick={handleDecrease}>
          <ion-icon
            class={classes.plus}
            name="remove-circle-outline"
          ></ion-icon>
        </div>
        <div>
          <input
            type="text"
            className={classes.input}
            value={quantity}
            onChange={handleInputChange}
          />
          <p
            className={classes.capacity}
          >{`ظرفیت: ${ticketDetails.capacity}`}</p>
        </div>
        <div onClick={handleIncrease}>
          <ion-icon class={classes.minus} name="add-circle-outline"></ion-icon>
        </div>
      </div> */}
      <div className={classes.desc}>
        {ticketDetails.discountedPrice === ticketDetails.price ? (
          <div>
            <p>{`${"قیمت"}:`}</p>
            <p>{` ${ticketDetails.price}`}</p>
          </div>
        ) : (
          <>
            <div className={classes.oldPrice}>
              <p>{`قیمت:`}</p>
              <p>{` ${ticketDetails.price}`}</p>
            </div>
            <div>
              <p>{`قیمت با تخفیف:`}</p>
              <p>{`${ticketDetails.discountedPrice}`}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Ticket;
