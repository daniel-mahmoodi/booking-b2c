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
            <div>
              <SansesType listOfSanses={listOfSanses} />
              {listOfSanses.map((sans) => (
                <Sanses key={sans.id} data={sans} />
              ))}
            </div>
            <div className={classes.dividerLine}></div>
            <div className={classes.explainSans}>
              <h3>توضیحات:</h3>
              <p>{selectedSansData.description}</p>
            </div>
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
