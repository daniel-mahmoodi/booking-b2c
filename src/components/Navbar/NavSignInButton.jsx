import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavSignInButton = () => {
  const history = useHistory()
  const sendUserToLoginhandler = () => {
    history.push('/login')
  };

  return (
    <div onClick={sendUserToLoginhandler} className="page-header__sing-in">
      <a className="uk-button uk-button-danger">
        <i className="fas fa-sign-in-alt"></i>
        <span style={{ marginRight: "5px" }} data-login>
          ورود / ثبت نام
        </span>
      </a>
    </div>
  );
};

export default NavSignInButton;
