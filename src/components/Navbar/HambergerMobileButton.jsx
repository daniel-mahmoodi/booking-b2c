import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const HambergerMobileButton = () => {
  const dispatch = useDispatch();
  const toggleSideBarHandler = () => {
    dispatch(uiActions.toggleSideBar(true));
  };
  return (
    <div onClick={toggleSideBarHandler} className="page-header__btn-menu">
      <a>
        <ion-icon name="menu-outline"></ion-icon>
      </a>
    </div>
  );
};

export default HambergerMobileButton;
