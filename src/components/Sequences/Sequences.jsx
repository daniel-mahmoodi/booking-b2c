import React, { useState } from "react";
import classes from "./Sequences.module.css";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../../store/event-slice";
import Sanses from "./Sanses";
import SansesType from "./SansesType";

const Sequences = () => {
  const dispatch = useDispatch();
  const listOfSanses = useSelector((state) => state.event.listOfSanses);
  const selectedSansData = useSelector((state) => state.event.selectedSansData);

  const toggleModal = () => {
    dispatch(eventActions.toggleSansesModal(false));
  };
  const placeOrderHandler = () => {
    console.log("placeOrderHandler");
  };
  return (
    <div>
      <div className={classes.modal}>
        <div className={classes.modalContent}>
          <span className={classes.close} onClick={toggleModal}>
            &times;
          </span>
          <div className={classes.details}>
            <SansesType listOfSanses={listOfSanses} />

            <div className={classes.dividerLine}></div>

            <button onClick={placeOrderHandler} className={classes.accept}>
              تایید تیکت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sequences;
