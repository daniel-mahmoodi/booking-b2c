import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { signUpRequest } from "../../store/auth-action";
import { authActions } from "../../store/auth-slice";

const initialState = {
  FirstName: "",
  LastName: "",
  Mobile: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ALL_FIELDS":
      return {
        ...state,
        FirstName: action.payload.FirstName,
        LastName: action.payload.LastName,
        Mobile: action.payload.Mobile,
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

const RegistrationByOTP = ({ changeRegistrationType }) => {
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
    if (!state.Mobile) {
      dispatch(
        authActions.showSignUpWarning({ Mobile: "این فیلد نباید خالی باشد" })
      );
    }

    if (state.Mobile) {
      dispatch(authActions.showSignUpWarning({}));
      dispatch(signUpRequest(state));
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
              />
            </div>
            <div>
              <input
                className="uk-input"
                type="text"
                name="LastName"
                placeholder="نام خانوادگی"
                value={state.LastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                className="uk-input"
                type="text"
                name="Mobile"
                placeholder="شماره موبایل خود را وارد کنید"
                value={state.Mobile}
                onChange={handleInputChange}
              />
              {signUpWarning && (
                <p className="invalid-msg">{signUpWarning.ConfirmPassword
                }</p>
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
                میخواهید با ایمیل و رمز اکانت بسازید؟
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

export default RegistrationByOTP;
