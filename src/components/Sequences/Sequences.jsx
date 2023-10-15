import React, { useState } from "react";
import classes from "./Sequences.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import SansesType from "./SansesType";

const Sequences = () => {
  const dispatch = useDispatch();
  const listOfSanses = useSelector((state) => state.event.listOfSanses);
  const selectedSansData = useSelector((state) => state.event.selectedSansData);
  console.log("listOfSanses in sequence com", listOfSanses);
  const toggleModal = () => {
    dispatch(uiActions.toggleSansesModal(false));
  };
  const placeOrderHandler = () => {
    console.log("placeOrderHandler");
  };
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.closeParent}>
          <span className={classes.close} onClick={toggleModal}>
            &times;
          </span>
        </div>
        <div className={classes.details}>
          <SansesType listOfSanses={listOfSanses} />

          <div className={classes.dividerLine}></div>

          {/* <button onClick={placeOrderHandler} className={classes.accept}>
              تایید تیکت
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default Sequences;
