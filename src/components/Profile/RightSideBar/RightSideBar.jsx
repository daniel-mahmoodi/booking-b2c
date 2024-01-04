import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../../store/profile-slice";
import classes from "./RightSideBar.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBasketShopping,
  faHatWizard,
  faShieldHalved,
  faPersonWalkingLuggage,
} from "@fortawesome/free-solid-svg-icons";
function RightSideBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const activeTab = useSelector((state) => state.profile.activeTab);
  console.log("activeTab", activeTab);

  const showTabHandler = (tab) => {
    dispatch(profileActions.selectActiveTab(tab));
    history.push(`/profile/${tab}`);
  };

  return (
    <div className={classes.profileSidenav}>
      <ul className={classes.links}>
        <li
          className={activeTab === "account" ? classes.active : ""}
          onClick={() => showTabHandler("account")}
        >
          <FontAwesomeIcon icon={faUser} />
          <p>حساب کاربری</p>
        </li>
        <hr />
        <li
          className={activeTab === "basket" ? classes.active : ""}
          onClick={() => showTabHandler("basket")}
        >
          <FontAwesomeIcon icon={faBasketShopping} />
          <p>سبد خرید</p>
        </li>
        <hr />
        <li
          className={activeTab === "insurance" ? classes.active : ""}
          onClick={() => showTabHandler("insurance")}
        >
          <FontAwesomeIcon icon={faShieldHalved} />
          <p>پوشش بیمه نامه</p>
        </li>
        <hr />
        <li
          className={activeTab === "orders" ? classes.active : ""}
          onClick={() => showTabHandler("orders")}
        >
          <FontAwesomeIcon icon={faHatWizard} />
          <p>سفارش ها</p>
        </li>
        <hr />
        <li
          className={activeTab === "exit" ? classes.active : ""}
          onClick={() => showTabHandler("exit")}
        >
          <FontAwesomeIcon icon={faPersonWalkingLuggage} />
          <p>خروج از حساب کاربری</p>
        </li>
      </ul>
    </div>
  );
}

export default RightSideBar;
