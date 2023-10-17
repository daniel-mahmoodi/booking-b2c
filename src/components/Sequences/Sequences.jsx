import React, { useState } from "react";
import classes from "./Sequences.module.css";
import { useSelector } from "react-redux";
import SansesType from "./SansesType";
import { useModal } from "../Hook/useModal";
const Sequences = () => {
  const listOfSanses = useSelector((state) => state.event.listOfSanses);
  const { toggleModal } = useModal();
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.closeParent}>
          <span className={classes.close} onClick={toggleModal}>
            &times;
          </span>
        </div>
        <div className={classes.header}>
          <p>همین حالا خرید کنید</p>
          <p>آیتم دلخواه خود را جهت سفارش به سبد خرید اضافه کنید</p>
        </div>
        <div className={classes.details}>
          <SansesType listOfSanses={listOfSanses} />

          {/* <div className={classes.dividerLine}></div> */}

          {/* <button onClick={placeOrderHandler} className={classes.accept}>
              تایید تیکت
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default Sequences;
