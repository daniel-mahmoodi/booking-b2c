import React from "react";

const LoginByOtpForm = ({onSubmit,mobile,onInputChange,loginWarning,changeRegistrationType,sendUserToRegistration}) => {
  return (
    <div className="card-login" style={{ marginTop: "-400px" }}>
      <div className="header">
        <img src="/assets/img/takish-logo.png" alt="" />
      </div>
      <h1 className="title">ورود به سایت</h1>
      <div className="uk-width-3-3@m body">
        <form onSubmit={onSubmit} autoComplete="off" id="login-form">
          <div
            className="uk-grid uk-grid-medium uk-child-width-2-2@s"
            data-uk-grid=""
          >
            <div style={{ marginTop: "10px" }}>
              <input
                className="uk-input"
                type="text"
                name="Mobile"
                value={mobile}
                onChange={onInputChange}
                placeholder="شماره موبایل خود را وارد کنید"
                id="birth-date"
              />
              {loginWarning && (
                <p className="invalid-msg">{loginWarning.Mobile}</p>
              )}
            </div>
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
              <a onClick={sendUserToRegistration}>حساب کاربری ندارید؟</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginByOtpForm;
