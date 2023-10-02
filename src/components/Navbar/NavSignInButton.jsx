import React from "react";

const NavSignInButton = () => {
  const showModalLogin = () => {};

  return (
    <div className="page-header__sing-in">
      <a className="uk-button uk-button-danger" onClick={showModalLogin}>
        <i className="fas fa-sign-in-alt"></i>
        <span style={{ marginRight: "5px" }} data-login>
          ورود / ثبت نام
        </span>
      </a>
    </div>
  );
};

export default NavSignInButton;
