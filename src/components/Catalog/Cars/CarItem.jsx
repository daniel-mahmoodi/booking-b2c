import React from "react";
import classes from "./CarItem.module.css";
import { uiActions } from "../../../store/ui-slice";
import { useDispatch } from "react-redux";
import { catalogActions } from "../../../store/catalog-slice";
const CarItem = ({ data }) => {
  const dispatch = useDispatch();
  const showPopUp = () => {
    dispatch(uiActions.toggleShowCounselingModal(true));
    dispatch(catalogActions.addSelectedCarId(data.id));
  };
  return (
    <div className={classes.body}>
      <div className={`${classes.img} ${classes.shine}`}>
        <img src={data.imageUrl} alt={data.title} />
      </div>
      <div className={classes.data}>
        <div className={classes.title}>
          <p>{data.title}</p>
          <p>{data.modelDate}</p>
        </div>
        <div className={classes.icons}>
          <div className={classes.iconBody}>
            <div className={classes.icon}>
              <ion-icon name="settings-outline"></ion-icon>
            </div>
            <p>{data.fuelType}</p>
          </div>
          <div className={classes.iconBody}>
            <div className={classes.icon}>
              <ion-icon name="color-fill-outline"></ion-icon>
            </div>
            <p>{data.isGearAutomatic ? "اتوماتیک" : "دنده ای"}</p>
          </div>
          <div className={classes.iconBody}>
            <div className={classes.icon}>
              <ion-icon name="people-outline"></ion-icon>
            </div>
            <p>{data.peopleCapacity}</p>
            <p>نفر</p>
          </div>
          <div className={classes.iconBody}>
            <div className={classes.icon}>
              <ion-icon name="bag-outline"></ion-icon>
            </div>
            <p>{data.loadCapacity}</p>
            <p>چمدان</p>
          </div>
        </div>
        <div className={classes.city}>
          <div className={classes.icon}>
            <ion-icon name="pin-outline"></ion-icon>
          </div>
          <p>در</p>
          <p>{data.city}</p>
        </div>
        <div onClick={showPopUp} className={classes.counseling}>
          <p>مشاوره</p>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
