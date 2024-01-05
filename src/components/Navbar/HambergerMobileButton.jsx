import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from './HambergerMobileButton.module.css'
const HambergerMobileButton = () => {
  const dispatch = useDispatch();
  const toggleSideBarHandler = () => {
    dispatch(uiActions.toggleSideBar(true));
  };
  return (
    <div onClick={toggleSideBarHandler} className={classes.btnMenu}>
      <a>
        <ion-icon name="menu-outline"></ion-icon>
      </a>
    </div>
  );
};

export default HambergerMobileButton;
