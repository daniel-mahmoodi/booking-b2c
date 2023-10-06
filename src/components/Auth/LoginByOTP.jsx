import React, { useReducer } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { loginRequest } from "../../store/auth-action";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";

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
        authActions.showLoginWarning({ Mobile: "این فیلد نباید خالی باشد" })
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
      <div className="card-login" style={{ marginTop: "-400px" }}>
        <div className="header">
          <img src="assets/img/takish-logo.png" alt="" />
        </div>
        <h1 className="title">ورود به سایت</h1>
        <div className="uk-width-3-3@m body">
          <form onSubmit={handleSubmit} autoComplete="off" id="login-form">
            <div
              className="uk-grid uk-grid-medium uk-child-width-2-2@s"
              data-uk-grid=""
            >
              <div style={{ marginTop: "10px" }}>
                <input
                  className="uk-input"
                  type="text"
                  name="Mobile"
                  value={state.Mobile}
                  onChange={handleInputChange}
                  placeholder="شماره موبایل خود را وارد کنید"
                  id="birth-date"
                />
                {loginWarning && (
                  <p className="invalid-msg">{loginWarning.Mobile}</p>
                )}
              </div>
              {/* <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: "7px", right: "8px" }}>
                  <img
                    src="assets/img/captcha.png"
                    alt=""
                    style={{ width: "100%", borderRadius: "20px" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "4px",
                      top: "4px",
                      color: "black",
                      width: "25px",
                      cursor: "pointer",
                    }}
                  >
                    <img src="assets/img/login/refresh_icon.png" alt="" />
                  </span>
                </div>
                <input
                  className="uk-input"
                  type="text"
                  name="first_name"
                  placeholder="کد کپچا"
                  required=""
                  style={{ paddingRight: "200px" }}
                />
              </div> */}
              <div className="uk-width-1-1 uk-grid-margin uk-first-column login-btn-container">
                <button
                  className="uk-button uk-button-danger uk-button-large shine"
                  type="submit"
                >
                  ورود به حساب کاربری
                </button>
              </div>
              <div
                className="forget-pass"
                style={{ cursor: "pointer", paddingTop: "12px" }}
              >
                <a onClick={changeRegistrationType}>
                  می خواهید با ایمیل وارد شوید؟
                </a>
              </div>
              <div className="forget-pass">
                {/* <a onClick={HandleForgotPasssword}>
                  رمز عبور خود را فراموش کرده اید؟
                </a> */}
                {/* <span className="pipe">|</span>{" "} */}
                <a onClick={sendUserToRegistrationHandler}>
                  حساب کاربری ندارید؟
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginByOTP;