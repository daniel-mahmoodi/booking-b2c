import React from "react";

function Login() {
  return (
    <div className="page-wrapper" id="login">
      <div className="cover"></div>
      <div id="particles-js"></div>
      <div className="card-login" style={{marginTop:'-400px'}} >
        <div className="header">
          <img src="assets/img/takish-logo.png" alt="" />
        </div>
        <h1 className="title">ورود به سایت</h1>
        <div className="uk-width-3-3@m body">
          <form autoComplete="off" id="login-form">
            <div
              className="uk-grid uk-grid-medium uk-child-width-2-2@s"
              data-uk-grid=""
            >
              <div>
                <input
                  className="uk-input"
                  type="text"
                  name="national_code"
                  placeholder="کد ملی"
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <input
                  className="uk-input"
                  type="text"
                  name="birth_date"
                  placeholder="تاریخ تولد"
                  required=""
                  id="birth-date"
                />
              </div>
              <div style={{ position: "relative" }}>
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
              </div>
              <div className="uk-width-1-1 uk-grid-margin uk-first-column login-btn-container">
                <button
                  className="uk-button uk-button-danger uk-button-large shine"
                  type="submit"
                >
                  ورود به حساب کاربری
                </button>
              </div>
              <div className="forget-pass">
                <a href="#">رمز عبور خود را فراموش کرده اید؟</a>{" "}
                <span className="pipe">|</span>{" "}
                <a href="#">حساب کاربری ندارید؟</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
