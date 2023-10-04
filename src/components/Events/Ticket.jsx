import React, { Fragment, useState } from "react";
import classes from "./Ticket.module.css";
const Ticket = ({ ticketDetails }) => {
  const [quantity, setQuantity] = useState(1);
  console.log("ticketDetails", ticketDetails);
  const handleIncrease = () => {
    if (quantity < ticketDetails.capacity) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1 && quantity <= ticketDetails.capacity) {
      setQuantity(quantity - 1);
    }
  };
  const handleInputChange = (e) => {
    if (e.target.value <= ticketDetails.capacity) {
      setQuantity(e.target.value);
    }
  };

  return (
    <div className={classes.body}>
      <div className={classes.buttons}>
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
      </div>
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
