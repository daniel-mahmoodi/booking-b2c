import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { authActions } from "../../store/auth-slice";
import { uiActions } from "../../store/ui-slice";
import { basketActions } from "../../store/basket-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import classes from "./NavSignInButton.module.css";

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
    <div onClick={sendUserToLoginhandler} className={classes.body}>
      <div className={classes.container}>
        {isLoggedIn ? (
          <p>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className={classes.desc}>خروج</span>
          </p>
        ) : (
          <p>
            <FontAwesomeIcon icon={faUser} />
            <span className={classes.desc}>ورود یا ثبت نام</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default NavSignInButton;
