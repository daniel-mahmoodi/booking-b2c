import React from "react";
import { useDispatch } from "react-redux";
import { profileActions } from "../../store/profile-slice";

function UserProfile() {
  const dispatch = useDispatch();
  const showTabHandler = (tab) => {
    dispatch(profileActions.selectActiveTb(tab));
    console.log("tab", tab);
  };

  return (
    <div className="profile-right">
      <div className="img-container">
        <div className="overlay"></div>
        <img src="assets/img/avatar-2.png" alt="" className="avatar" />
        <p className="title">نام کاربری</p>
      </div>
      <div className="profile-sidenav">
        <ul>
          <li onClick={() => showTabHandler("dashboard")}>
            <a>داشبورد</a>
          </li>
          <li onClick={() => showTabHandler("editProfile")}>
            <a>ویرایش حساب کاربری</a>
          </li>
          <li onClick={() => showTabHandler("basket")}>
            <a>سبد خرید</a>
          </li>
          <li onClick={() => showTabHandler("factor")}>
            <a>پوشش بیمه نامه</a>
          </li>
          <li onClick={() => showTabHandler("order")}>
            <a>سفارش ها</a>
          </li>
          <li onClick={() => showTabHandler("exit")}>
            <a>خروج از حساب کاربری</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
