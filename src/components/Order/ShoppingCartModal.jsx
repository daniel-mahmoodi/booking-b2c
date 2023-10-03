import React from "react";

function ShoppingCartModal() {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        direction: "rtl",
        display: "none",
      }}
      id="modal"
    >
      <div style={{ backgroundColor: "white", width: "60%", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
        <div
          style={{
            backgroundColor: "#f44153",
            color: "white",
            padding: "5px 10px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <p style={{ margin: 0, fontSize: 14 }}>همین حالا خرید کنید</p>
          <p style={{ margin: 0, fontSize: 12 }}>
            آیتم دلخواه خود را جهت سفارش به سبد خرید اضافه کنید
          </p>
          <span
            className="fa fa-times close"
            style={{ cursor: "pointer", left: 10, top: 10, position: "absolute" }}
          ></span>
        </div>
        <style>
          {/* CSS styles go here */}
        </style>
        <div>
          <div className="basket-contaienr">
            <div className="basket">
              {/* Shopping cart items go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartModal;
