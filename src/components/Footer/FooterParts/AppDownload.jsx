import React from "react";

const AppDownload = () => {
  return (
    <div className="uk-width-1-3@m uk-width-1-2@s uk-flex-last@m">
      <h3 className="uk-h3">نصب اپلیکیشن</h3>
      <p style={{ fontSize: "14px" }}>جهت نصب اپلیکیشن کلیک کنید</p>
      <div className="uk-grid uk-grid-small uk-child-width-1-1" data-uk-grid>
        {/* <div>
          <img src="assets/img/AppStore.svg" alt="AppStore" />
        </div> */}
        <div>
          <img src="assets/img/PlayStore.svg" alt="PlayStore" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
