import React from "react";
import classes from "./Counseling.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
const Counseling = () => {
  const dispatch = useDispatch();
  const selectedCarId = useSelector((state) => state.catalog.selectedCarId);
  const listOfFilteredCars = useSelector(
    (state) => state.catalog.listOfFilteredCars
  );
  const selectedCarPhoneNumber = listOfFilteredCars.data.find(
    (item) => item.id === selectedCarId
  ).companyPhoneNumber;
  const toggleModal = () => {
    dispatch(uiActions.toggleShowCounselingModal(false));
  };
  const handleCallClick = () => {
    window.location.href = `tel:${selectedCarPhoneNumber}`;
  };
  const openWhatsAppChat = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${selectedCarPhoneNumber}`;
    window.open(whatsappURL, "_blank");
    dispatch(uiActions.toggleShowCounselingModal(false));
  };
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.closeParent}>
          <span className={classes.close} onClick={toggleModal}>
            &times;
          </span>
        </div>
        <div className={classes.header}>
          <p>راه های ارتباطی</p>
        </div>
        <div className={classes.details}>
          {/* <p>برای دریافت مشاوره یکی از راه های زیر را انتخاب کنید</p> */}
          <div
            onClick={handleCallClick}
            className={`${classes.call} ${classes.items}`}
          >
            <ion-icon name="call-outline"></ion-icon>
            <p>تماس تلفنی</p>
            <p>{selectedCarPhoneNumber}</p>
          </div>
          <div
            onClick={openWhatsAppChat}
            className={`${classes.massege} ${classes.items}`}
          >
            <ion-icon name="logo-whatsapp"></ion-icon>
            <p>واتساپ</p>
            <p>{selectedCarPhoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
