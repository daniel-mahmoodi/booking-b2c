import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { Link } from "react-router-dom";
import classes from "./OffcanvasMenu.module.css";
import Logo from "../Layout/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartFlatbedSuitcase,
  faCircleXmark,
  faHatWizard,
  faHeadset,
  faInbox,
  faMountainCity,
  faPersonWalkingLuggage,
  faShieldHalved,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const OffcanvasMenu = () => {
  const dispatch = useDispatch();
  const toggleSideBarHandler = () => {
    dispatch(uiActions.toggleSideBar(false));
  };
  return (
    <div className={classes.body}>
      <div onClick={toggleSideBarHandler} className={classes.background}></div>
      <div className={classes.container}>
        {/* <button className={classes.closeBtn} onClick={toggleSideBarHandler}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button> */}
        <div className={classes.menu}>
          <div className={classes.logo}>
            <Logo />
          </div>
          <ul className={classes.list} onClick={toggleSideBarHandler}>
            <Link to="/home">
              <FontAwesomeIcon
                className={classes.bottomListIcon}
                icon={faMountainCity}
              />
              <span>خانه</span>
            </Link>
            <Link to="/profile/basket">
              <FontAwesomeIcon
                className={classes.bottomListIcon}
                icon={faCartFlatbedSuitcase}
              />
              <span>سبد خرید</span>
            </Link>
            <Link to="/profile/orders">
              <FontAwesomeIcon
                className={classes.bottomListIcon}
                icon={faHatWizard}
              />
              <span>سفارشات</span>
            </Link>
            <Link to="/profile/account">
              <FontAwesomeIcon
                className={classes.bottomListIcon}
                icon={faUser}
              />
              <span>حساب کاربری</span>
            </Link>
            <Link to="/call-us">
              <FontAwesomeIcon
                className={classes.bottomListIcon}
                icon={faHeadset}
              />
              <span>مرکز پشتیبانی آنلاین</span>
            </Link>
            <Link to="/about">
              <FontAwesomeIcon
                className={classes.bottomListIcon}
                icon={faInbox}
              />
              <span>درباره ما</span>
            </Link>

            <Link to="/profile">
              <FontAwesomeIcon
                className={classes.bottomListIcon}
                icon={faShieldHalved}
              />
              <span>پوشش بیمه نامه</span>
            </Link>

            <Link to="/profile">
              <FontAwesomeIcon
                className={classes.bottomListIcon}
                icon={faPersonWalkingLuggage}
              />
              <span>خروج از حساب کاربری</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OffcanvasMenu;
