import React, { useReducer } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { loginRequest } from "../../store/auth-action";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import LoginByOtpForm from "./LoginByOtpForm";

const initialState = {
  Mobile: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };

    default:
      return state;
  }
};

function LoginByOTP({ changeRegistrationType }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginWarning = useSelector((state) => state.auth.loginWarning);
  const [state, localDispatch] = useReducer(reducer, initialState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    localDispatch({
      type: "UPDATE_FIELD",
      fieldName: name,
      payload: value,
    });
  };

  const sendUserToRegistrationHandler = () => {
    history.push("/signup");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.Mobile) {
      dispatch(
        authActions.showLoginWarning({
          ConfirmPassword: "این فیلد نباید خالی باشد",
        })
      );
    }

    if (state.Mobile) {
      dispatch(authActions.showLoginWarning({}));
      dispatch(loginRequest(state));
    }
  };
  return (
    <div className="page-wrapper" id="login">
      <div className="cover"></div>
      <div id="particles-js"></div>
      <LoginByOtpForm
        onSubmit={handleSubmit}
        mobile={state.Mobile}
        onInputChange={handleInputChange}
        loginWarning={loginWarning}
        changeRegistrationType={changeRegistrationType}
        sendUserToRegistration={sendUserToRegistrationHandler}
      />
    </div>
  );
}

export default LoginByOTP;
