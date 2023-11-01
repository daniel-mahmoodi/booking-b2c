import React, { Fragment, useState } from "react";
import LoginByOTP from "./LoginByOTP";
import LoginByPass from "./LoginByPass";
import AddingOTP from "./AddingOTP";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const Login = () => {
  const history = useHistory();
  const [byPass, setByPass] = useState(true);
  const openOtpPage = useSelector((state) => state.ui.openOtpPage);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const changeRegistrationType = () => {
    setByPass((prev) => !prev);
  };
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, []);
  return (
    <Fragment>
      {!byPass ? (
        <LoginByPass changeRegistrationType={changeRegistrationType} />
      ) : openOtpPage ? (
        <AddingOTP />
      ) : (
        <LoginByOTP changeRegistrationType={changeRegistrationType} />
      )}
    </Fragment>
  );
};
