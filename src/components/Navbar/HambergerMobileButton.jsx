import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from './HambergerMobileButton.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const HambergerMobileButton = () => {
  const dispatch = useDispatch();
  const toggleSideBarHandler = () => {
    dispatch(uiActions.toggleSideBar(true));
  };
  return (
    <div onClick={toggleSideBarHandler} className={classes.btnMenu}>
      <div>
      <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
};

export default HambergerMobileButton;
