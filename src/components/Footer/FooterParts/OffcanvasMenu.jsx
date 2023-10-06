import React from "react";

const OffcanvasMenu = () => {
  return (
    <div id="offcanvas" data-uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar uk-flex uk-flex-column uk-flex-between">
        <button
          className="uk-offcanvas-close"
          type="button"
          data-uk-close=""
        ></button>
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
          <div className="uk-margin">
            <a className="uk-button uk-button-danger" href="#!">
              <i className="fas fa-user"></i>
              <span style={{ marginRight: "5px" }}>پروفایل</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffcanvasMenu;
