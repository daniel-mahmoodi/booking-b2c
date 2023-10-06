import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { signUpRequest } from "../../store/auth-action";
import { authActions } from "../../store/auth-slice";
// 207,
const initialState = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
  ConfirmPassword: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ALL_FIELDS":
      return {
        ...state,
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
        Email: action.payload.Email,
        Password: action.payload.Password,
        ConfirmPassword: action.payload.ConfirmPassword,
      };
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };

    default:
      return state;
  }
};
const RegistrationByPass = ({ changeRegistrationType }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, localDispatch] = useReducer(reducer, initialState);
  const signUpWarning = useSelector((state) => state.auth.signUpWarning);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    localDispatch({
      type: "UPDATE_FIELD",
      fieldName: name,
      payload: value,
    });
  };
  console.log("state", state);
  const sendUserToLoginPageHandler = () => {
    history.push("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.Email) {
      dispatch(
        authActions.showSignUpWarning({ Email: "این فیلد نباید خالی باشد" })
      );
    }
    if (!state.Password) {
      dispatch(
        authActions.showSignUpWarning({ Password: "این فیلد نباید خالی باشد" })
      );
    }

    if (!state.ConfirmPassword) {
      dispatch(
        authActions.showSignUpWarning({
          ConfirmPassword: "این فیلد نباید خالی باشد",
        })
      );
    }
    if (state.Email && state.Password && state.ConfirmPassword) {
      if (state.Password === state.ConfirmPassword) {
        dispatch(authActions.showSignUpWarning({}));
        dispatch(signUpRequest(state));
      } else {
        dispatch(
          authActions.showSignUpWarning({
            ConfirmPassword: "کلمه عبور با تکرار آن برابر نیستی ",
          })
        );
      }
    }
  };
  console.log("signUpWarning", signUpWarning);
  return (
    <div className="card-login" style={{ marginTop: "-300px" }}>
      <div className="header">
        <img src="assets/img/takish-logo.png" alt="" />
      </div>
      <h1 className="title">ثبت نام</h1>

      <div className="uk-width-3-3@m body">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div
            className="uk-grid uk-grid-medium uk-child-width-2-2@s"
            data-uk-grid=""
          >
            <div>
              <input
                className="uk-input"
                type="text"
                name="FirstName"
                placeholder="نام"
                value={state.FirstName}
                onChange={handleInputChange}
                // required
              />
              {signUpWarning && (
                <p className="invalid-msg">{signUpWarning.FirstName}</p>
              )}
            </div>
            <div>
              <input
                className="uk-input"
                type="text"
                name="LastName"
                placeholder="نام خانوادگی"
                value={state.LastName}
                onChange={handleInputChange}
                // required
              />
              {signUpWarning && (
                <p className="invalid-msg">{signUpWarning.LastName}</p>
              )}
            </div>
            <div>
              <input
                className="uk-input"
                type="text"
                name="Email"
                placeholder="پست الکترونیکی(Email)"
                value={state.Email}
                onChange={handleInputChange}
                // required
              />
              {signUpWarning && (
                <p className="invalid-msg">{signUpWarning.Email}</p>
              )}
            </div>
            <div>
              <input
                className="uk-input"
                type="password"
                name="Password"
                placeholder="رمز"
                value={state.Password}
                onChange={handleInputChange}
                // required
              />
              {signUpWarning && (
                <p className="invalid-msg">{signUpWarning.Password}</p>
              )}
            </div>
            <div>
              <input
                className="uk-input"
                type="password"
                name="ConfirmPassword"
                placeholder="رمز"
                value={state.ConfirmPassword}
                onChange={handleInputChange}
                // required
              />
              {signUpWarning && (
                <p className="invalid-msg">{signUpWarning.ConfirmPassword}</p>
              )}
            </div>
            <div className="uk-width-1-1 uk-grid-margin uk-first-column login-btn-container">
              <button
                className="uk-button uk-button-danger uk-button-large shine"
                type="submit"
              >
                ثبت نام
              </button>
            </div>
            <div
              className="forget-pass"
              style={{ cursor: "pointer", paddingTop: "12px" }}
            >
              <a onClick={changeRegistrationType}>
                میخواهید با شماره موبایل اکانت بسازید؟
              </a>
            </div>
            <div
              className="forget-pass"
              style={{ cursor: "pointer", paddingTop: "12px" }}
            >
              <a onClick={sendUserToLoginPageHandler}>حساب کاربری دارید؟</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationByPass;
