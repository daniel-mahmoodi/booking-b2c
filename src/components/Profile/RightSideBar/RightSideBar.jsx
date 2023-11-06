import React from "react";
import { useDispatch } from "react-redux";
import { profileActions } from "../../../store/profile-slice";
import classes from "./RightSideBar.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function RightSideBar() {
  const dispatch = useDispatch();
  const history = useHistory()
  const showTabHandler = (tab) => {
    dispatch(profileActions.selectActiveTab(tab));
  };

  return (
    <div className="profile-right">
      <div className="img-container">
        <div className="overlay"></div>
        <img src="/assets/img/avatar-2.png" alt="" className="avatar" />
        <p className="title">نام کاربری</p>
      </div>
      <div className={classes.profileSidenav}>
        <ul>
          <li onClick={() => showTabHandler("dashboard")}>
            <a className={classes.link}>داشبورد</a>
          </li>
          <li onClick={() => showTabHandler("editProfile")}>
            <a className={classes.link}>ویرایش حساب کاربری</a>
          </li>
          <li onClick={() => showTabHandler("basket")}>
            <a className={classes.link}>سبد خرید</a>
          </li>
          <li onClick={() => showTabHandler("factor")}>
            <a className={classes.link}>پوشش بیمه نامه</a>
          </li>
          <li onClick={() => showTabHandler("order")}>
            <a className={classes.link}>سفارش ها</a>
          </li>
          <li onClick={() => showTabHandler("exit")}>
            <a className={classes.link}>خروج از حساب کاربری</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightSideBar;
