import React from "react";

function PricingNotificationBar() {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "saturate(180%) blur(10px)",
        padding: "5px 0px",
        boxShadow:
          "rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <div style={{ maxWidth: "780px", margin: "auto" }}>
        <div
          className="uk-container c-scroll"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              direction: "rtl",
              fontSize: "14px",
            }}
          >
            <span style={{ marginLeft: "15px" }}>قیمت</span>
            <div>
              <span
                style={{ color: "red", textDecoration: "line-through red" }}
              >
                ۱۲,۰۰۰ تومان
              </span>
              <br />
              <span style={{ color: "green" }}>۱۲,۰۰۰ تومان</span>
            </div>
          </div>
          <button
            className="uk-button uk-button-danger uk-button-large shine"
            style={{ direction: "rtl" }}
            data-basket
          //   onClick={()=>submitOrderHandler(data.id)}
          >
            <span
              className="fa fa-shopping-bag"
              style={{ marginLeft: "10px" }}
            ></span>
            <span>افزودن به سبد خرید</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingNotificationBar;
