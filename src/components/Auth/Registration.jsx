import React, { useState } from "react";
import RegistrationByPass from "./RegistrationByPass";
import RegistrationByOTP from "./RegistrationByOTP";

function Registration() {
  const [byPass, setByPass] = useState(true);
  const changeRegistrationType = () => {
    setByPass((prev) => !prev);
  };
  return (
    <div className="page-wrapper" id="login">
      <div className="cover"></div>
      <div id="particles-js"></div>
      {byPass ? <RegistrationByPass changeRegistrationType={changeRegistrationType} /> : <RegistrationByOTP changeRegistrationType={changeRegistrationType} />}
    </div>
  );
}

export default Registration;
