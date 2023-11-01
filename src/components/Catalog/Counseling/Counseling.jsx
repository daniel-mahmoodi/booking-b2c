import React from "react";
import classes from "./Counseling.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
const Counseling = () => {
  const dispatch = useDispatch();
  const selectedCarId = useSelector((state) => state.catalog.selectedCarId);
  const toggleModal = () => {
    dispatch(uiActions.toggleShowCounselingModal(false));
  };
  console.log("selectedCarId", selectedCarId);
//   
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.closeParent}>
          <span className={classes.close} onClick={toggleModal}>
            &times;
          </span>
        </div>
        <div className={classes.header}>
          <p>برای دریافت مشاوره یکی از راه های زیر را انتخاب کنید</p>
        </div>
        <div className={classes.details}>
          <div className={classes.call}>
            <ion-icon name="call-outline"></ion-icon>
            <p>تماس تلفنی</p>
            <p>{DataTransfer.companyPhoneNumber}</p>
          </div>
          <div className={classes.massege}>
            <ion-icon name="logo-whatsapp"></ion-icon>
            <p>واتساپ</p>
            <p>{DataTransfer.companyPhoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
