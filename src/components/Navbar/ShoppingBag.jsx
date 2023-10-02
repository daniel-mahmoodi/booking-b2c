import React from "react";

const ShoppingBag = () => {
  return (
    <div
      style={{ margin: "0 10px", position: "relative" }}
      className="bag-item"
    >
      <a href="">
        <i
          className="fa fa-shopping-bag"
          style={{
            marginLeft: "5px",
            position: "relative",
            top: "2px",
          }}
        ></i>
      </a>
      <div className="basket-header">
        <div className="item">
          <img src="assets/img/blog-thumb-1.jpg" alt="" />
          <div className="p-2">
            <p className="m-0 fw-md title">عنوان محصول</p>
            <p className="m-0 description">توضیحات بیشتر</p>
          </div>
          <span className="delete">
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>
        <div className="item">
          <img src="assets/img/blog-thumb-1.jpg" alt="" />
          <div className="p-2">
            <p className="m-0 fw-md title">عنوان محصول</p>
            <p className="m-0 description">توضیحات بیشتر</p>
          </div>
          <span className="delete">
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>
        <hr />
        <p className="total-price-box">
          <span>مبلغ قابل پرداخت</span>
          <span className="text-green fw-md">۵۴۰۰۰ تومان</span>
        </p>
        <hr />
        <a className="uk-button uk-button-danger shine">مشاهده سبد خرید</a>
      </div>
      <span
        style={{
          backgroundColor: "#f44153",
          color: "white",
          borderRadius: "50%",
          width: "15px",
          height: "15px",
          fontSize: "12px",
          display: "inline-block",
          justifyContent: "center",
          textAlign: "center",
          position: "absolute",
          top: "0",
          right: "-10px",
        }}
      >
        ۱
      </span>
    </div>
  );
};

export default ShoppingBag;
