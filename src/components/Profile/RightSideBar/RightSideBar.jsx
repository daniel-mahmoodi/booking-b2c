import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../../store/profile-slice";
import classes from "./RightSideBar.module.css";
import {
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHatWizard,
  faShieldHalved,
  faPersonWalkingLuggage,
  faCartFlatbedSuitcase,
} from "@fortawesome/free-solid-svg-icons";
function RightSideBar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const activeTab = useSelector((state) => state.profile.activeTab);

  const showTabHandler = (tab) => {
    dispatch(profileActions.selectActiveTab(tab));
    history.push(`/profile/${tab}`);
  };
  
  useEffect(() => {
    const parts = history.location.pathname.split("/");
    const lastPart = parts[parts.length - 1];
    dispatch(profileActions.selectActiveTab(lastPart));
  }, [dispatch, history.location.pathname]);

  return (
    <div className={classes.body}>
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
          <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
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
