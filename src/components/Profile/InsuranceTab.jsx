import React from "react";

function InsuranceTab() {
  return (
    <div className="profile-left" style={{ display: "none" }} id="insurance">
      <div className="profile-right-title">پوشش بیمه نامه</div>
      <div>
        <div className="d-flex">
          <div className="data-item">
            <div>
              <span className="fa fa-user icon"></span>
              <span>نام و نام خانوادگی :</span>
              <span>نام کاربری</span>
            </div>
          </div>
          <div className="data-item">
            <div>
              <span className="fa fa-calendar icon"></span>
              <span>تاریخ بیمه:</span>
              <span>۱۳۷۳/۰۱/۰۲</span>
            </div>
          </div>
          <div className="data-item">
            <div>
              <span className="fa fa-life-ring icon"></span>
              <span>بیمه :</span>
              <span>تستی</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="profile-right-title"
        style={{ borderTop: "1px solid lightgray", marginTop: "20px" }}
      >
        لیست بیمه نامه ها
      </div>
      <div className="insurance-contaienr">
        <div>
          <div className="insurance">
            <ul className="data-row">
              <li>ردیف</li>
              <li>پوشش بیمه</li>
              <li>تعهد بیمه گر</li>
              <li>مبلغ به ریال</li>
            </ul>
            <div className="data-block">
              <div className="body">
                <h2
                  className="title"
                  style={{
                    backgroundColor: "#F44153",
                    color: "white",
                    display: "inline-block",
                    padding: "2px 8px",
                    borderRadius: "5px",
                  }}
                >
                  ۱
                </h2>
                <h2 className="title">پوشش بیمه</h2>
                <div className="content">
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                </div>
                <h2 className="title">تعهد بیمه گر</h2>
                <div className="content">
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                </div>
                <h2 className="title">مبلغ به ریال</h2>
                <div className="price">۷۶,۰۰۰</div>
              </div>
            </div>
            <ul className="data-row">
              <li>۱</li>
              <li>
                <div className="body">
                  <div className="content">
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="body">
                  <div className="content">
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="body">
                  <div className="price">۷۶,۰۰۰</div>
                </div>
              </li>
            </ul>
            <div className="data-block">
              <div className="body">
                <h2
                  className="title"
                  style={{
                    backgroundColor: "#F44153",
                    color: "white",
                    display: "inline-block",
                    padding: "2px 8px",
                    borderRadius: "5px",
                  }}
                >
                  ۲
                </h2>
                <h2 className="title">پوشش بیمه</h2>
                <div className="content">
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                </div>
                <h2 className="title">تعهد بیمه گر</h2>
                <div className="content">
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                  <div>
                    <span className="fa fa-check text-green icon"></span>
                    <span className="text">لورم ایپسوم متن ساختگی </span>
                  </div>
                </div>
                <h2 className="title">مبلغ به ریال</h2>
                <div className="price">۷۶,۰۰۰</div>
              </div>
            </div>
            <ul className="data-row">
              <li>۲</li>
              <li>
                <div className="body">
                  <div className="content">
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="body">
                  <div className="content">
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                    <div>
                      <span className="fa fa-check text-green icon"></span>
                      <span className="text">لورم ایپسوم متن ساختگی </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="body">
                  <div className="price">۷۶,۰۰۰</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsuranceTab;
