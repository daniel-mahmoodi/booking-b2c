import React, { useState } from "react";
import RegistrationByPass from "./RegistrationByPass";
import RegistrationByOTP from "./RegistrationByOTP";
import AddingOTP from "./AddingOTP";
import { useSelector } from "react-redux";

function Registration() {
  const openOtpPage = useSelector((state) => state.ui.openOtpPage);

  const [byPass, setByPass] = useState(true);
  const changeRegistrationType = () => {
    setByPass((prev) => !prev);
  };
  return (
    <div className="page-wrapper" id="login">
      <div className="cover"></div>
      <div id="particles-js"></div>
      {byPass ? (
        <RegistrationByPass changeRegistrationType={changeRegistrationType} />
      ) : openOtpPage ? (
        <AddingOTP />
      ) : (
        <RegistrationByOTP changeRegistrationType={changeRegistrationType} />
      )}
    </div>
  );
}

export default Registration;
