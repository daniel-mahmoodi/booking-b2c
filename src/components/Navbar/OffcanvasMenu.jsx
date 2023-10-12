import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import NavSignInButton from "./NavSignInButton";

const OffcanvasMenu = () => {
  const dispatch = useDispatch();
  const toggleSideBarHandler = () => {
    dispatch(uiActions.toggleSideBar(false));
  };
  return (
    <div id="offcanvas" data-uk-offcanvas="overlay: true">
      <div
        className="uk-offcanvas-bar uk-flex uk-flex-column uk-flex-between"
        style={{
          display: "block",
          position: "absolute",
          right: "0px",
          left: "auto",
          top: "0px",
          zIndex: "1000",
        }}
      >
        <button
          onClick={toggleSideBarHandler}
          className="uk-offcanvas-close"
          style={{ backgroundColor: "white", border: "0" }}
          type="button"
          data-uk-close=""
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div>
          <div className="uk-margin">
            <div className="logo">
              <a className="logo__link">
                <img
                  className="logo__img"
                  src="assets/img/takish-logo.png"
                  alt="Doremi"
                  style={{ width: "200px" }}
                />
              </a>
            </div>
          </div>
          <div className="uk-margin-medium">
            <ul
              className="uk-nav uk-nav-default uk-nav-parent-icon"
              data-uk-nav
            >
              <li className="uk-parent">
                <a href="#!">خانه</a>
                <ul className="uk-nav-sub">
                  <li>
                    <a>زیر لیست</a>
                  </li>
                  <li>
                    <a>زیر لیست</a>
                  </li>
                </ul>
              </li>
              <li className="uk-parent">
                <a href="#!">تماس با ما</a>
                <ul className="uk-nav-sub">
                  <li>
                    <a>زیر لیست</a>
                  </li>
                  <li>
                    <a>زیر لیست</a>
                  </li>
                </ul>
              </li>
              <li className="uk-parent">
                <a href="#!">پشتیبانی</a>
                <ul className="uk-nav-sub">
                  <li>
                    <a>زیر لیست</a>
                  </li>
                  <li>
                    <a>زیر لیست</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <NavSignInButton />
        </div>
      </div>
    </div>
  );
};

export default OffcanvasMenu;
