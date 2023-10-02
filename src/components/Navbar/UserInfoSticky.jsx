import React from "react";

const UserInfoSticky = () => {
  return (
    <div data-uk-sticky>
      <div
        className="user-top-details"
        style={{
          background: "#f59da6d5",
          backdropFilter: "saturate(180%) blur(10px)",
          color: "#070a52",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="uk-container"
          style={{
            fontSize: "12px",
            fontWeight: 400,
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <span className="item1" style={{ margin: "0 10px" }}>
              کاربر جدید
            </span>
            <span className="item1">خوش آمدید </span>
            <span className="item2">کد ملی </span>
            <span className="item2 persian-num" style={{ margin: "0 10px" }}>
              3860670115
            </span>
          </div>
          <div className="page-header__sing-in page-header__profile profile2">
            <a
              className="uk-button uk-button-danger"
              style={{ position: "relative", height: "35px", width: "90px" }}
              href="#"
            >
              <span
                style={{
                  display: "inline-block",
                  width: "30px",
                  height: "30px",
                  backgroundImage: "url('assets/img/avatar-1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "50%",
                  position: "absolute",
                  right: "1px",
                  top: "1.5px",
                }}
              ></span>
              <span style={{ marginRight: "10px", fontSize: "12px" }}>
                پروفایل
              </span>
            </a>
            <div className="profile-dropdown">
              <ul>
                <li>
                  <a href="#" className="shine">
                    <span>
                      <i
                        className="fa fa-user"
                        style={{
                          fontSize: "12px",
                          marginLeft: "5px",
                          position: "relative",
                          top: "2px",
                        }}
                      ></i>
                    </span>
                    <span style={{ fontSize: "12px" }}>امیرحسین رضاوند</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="shine">
                    <span>
                      <i
                        className="fa fa-shopping-bag"
                        style={{
                          fontSize: "12px",
                          marginLeft: "5px",
                          position: "relative",
                          top: "2px",
                        }}
                      ></i>
                    </span>
                    <span style={{ fontSize: "12px" }}>سبد خرید</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="shine">
                    <span>
                      <i
                        className="fa fa-th-large"
                        style={{
                          fontSize: "12px",
                          marginLeft: "5px",
                          position: "relative",
                          top: "2px",
                        }}
                      ></i>
                    </span>
                    <span style={{ fontSize: "12px" }}>سفارشات</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="shine">
                    <span>
                      <i
                        className="fa fa-power-off"
                        style={{
                          fontSize: "12px",
                          marginLeft: "5px",
                          position: "relative",
                          top: "2px",
                        }}
                      ></i>
                    </span>
                    <span style={{ fontSize: "12px" }}>خروج</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoSticky;
