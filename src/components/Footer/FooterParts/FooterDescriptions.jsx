import React from "react";

const FooterDescriptions = () => {
  return (
    <div className="uk-width-1-3@m uk-width-1-2@s">
      <div className="logo">
        <a className="logo__link" href="/">
          <img
            className="logo__img"
            src="/assets/img/takish-logo.png"
            alt="Doremi"
            style={{ width: "200px" }}
          />
        </a>
      </div>
      <p style={{ fontSize: "14px" }}>
        تاکیش724<br />
        {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از <br />
        لورم ایپسوم متن ساختگی */}
      </p>
      {/* <ul className="uk-list">
        <li>
          <span>ایمیل: </span>
          <a href="mailto:ar.rezavand@gmail.com">ar.rezavand@gmamil.com</a>
        </li>
        <li>
          <span>شماره تماس: </span>
          <a
            href="tel:104023513690"
            style={{ direction: "ltr", textAlign: "left" }}
          >
            ۹۱۰۰۹۶۸۲۲۸
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default FooterDescriptions;
