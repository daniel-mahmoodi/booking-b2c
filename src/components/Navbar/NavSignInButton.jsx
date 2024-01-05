import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { authActions } from "../../store/auth-slice";
import { uiActions } from "../../store/ui-slice";
import { basketActions } from "../../store/basket-slice";

const NavSignInButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const sendUserToLoginhandler = () => {
    dispatch(uiActions.toggleSideBar(false));
    dispatch(uiActions.sendUserToOtpPage(false));
    if (isLoggedIn) {
      dispatch(authActions.logout());
      dispatch(basketActions.eraseAllBasket());
    } else {
      history.push("/login");
    }
  };

  return (
    <div onClick={sendUserToLoginhandler} className="page-header__sing-in">
      <a className="uk-button uk-button-danger">
        <i className="fas fa-sign-in-alt"></i>
        <span style={{ marginRight: "5px" }} data-login>
          {isLoggedIn ? "خروج" : "ورود / ثبت نام"}
        </span>
      </a>
    </div>
  );
};

export default NavSignInButton;
