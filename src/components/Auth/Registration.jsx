import React, { useState } from "react";

function Registration() {

  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page-wrapper" id="login">
      <div className="cover"></div>
      <div id="particles-js"></div>
      <div className="card-login" style={{ marginTop: "-400px" }}>
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
                  name="first_name"
                  placeholder="نام و نام خانوادگی"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <p className="invalid-msg">مقدار معتبر وارد نمائید</p>
              </div>
              <div>
                <input
                  className="uk-input"
                  type="text"
                  name="phone_number"
                  placeholder="شماره تماس"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <p className="invalid-msg">مقدار معتبر وارد نمائید</p>
              </div>
              <div>
                <input
                  className="uk-input"
                  type="text"
                  name="national_code"
                  placeholder="کد ملی"
                  value={nationalCode}
                  onChange={(e) => setNationalCode(e.target.value)}
                  required
                />
                <p className="invalid-msg">مقدار معتبر وارد نمائید</p>
              </div>
              <div style={{ marginTop: "10px" }}>
                <input
                  className="uk-input"
                  type="text"
                  name="birth_date"
                  placeholder="تاریخ تولد"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                  id="birth-date"
                />
                <p className="invalid-msg">مقدار معتبر وارد نمائید</p>
              </div>
              <div className="uk-width-1-1 uk-grid-margin uk-first-column login-btn-container">
                <button
                  className="uk-button uk-button-danger uk-button-large shine"
                  type="submit"
                >
                  ثبت نام
                </button>
              </div>
              <div className="forget-pass">
                <a href="#">حساب کاربری دارید؟</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
