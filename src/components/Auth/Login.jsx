import React, { Fragment, useState } from "react";
import LoginByOTP from "./LoginByOTP";
import LoginByPass from "./LoginByPass";

export const Login = () => {
  const [byPass, setByPass] = useState(true);
  const changeRegistrationType = () => {
    console.log('asdad');
    setByPass((prev) => !prev);
  };
  return (
    <Fragment>
      {byPass ? (
        <LoginByPass changeRegistrationType={changeRegistrationType} />
      ) : (
        <LoginByOTP changeRegistrationType={changeRegistrationType} />
      )}
    </Fragment>
  );
};
