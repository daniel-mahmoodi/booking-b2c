import React from "react";

function DashboardTab() {
  return (
    <div className="profile-left" style={{ display: "none" }} id="dashboard">
      <div className="profile-right-title">داشبورد</div>
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
              <span className="fa fa-phone icon"></span>
              <span>شماره تماس :</span>
              <span>۰۹۱۰۰۹۶۸۲۲۸</span>
            </div>
          </div>
          <div className="data-item">
            <div>
              <span className="fa fa-envelope icon"></span>
              <span>ایمیل :</span>
              <span>ar.rezavand@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTab;
