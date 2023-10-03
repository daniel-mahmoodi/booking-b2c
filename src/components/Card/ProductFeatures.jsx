import React from "react";
import { submitOrderHandler } from "../Utilities/Utils";

const ProductFeatures = () => {
  
  return (
    <div className="widjet widjet-category">
      <h4 className="widjet__title" style={{ fontSize: "14px" }}>
        ویژگی ها
      </h4>
      <ul
        className="list-category list-checked"
        style={{ listStyleType: "none", fontSize: "14px" }}
      >
        <li>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>قیمت</span>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              className="uk-button uk-button-danger uk-button-large shine"
              data-basket
          //     onClick={()=>submitOrderHandler(data.id)}
            >
              <span
                className="fa fa-shopping-bag"
                style={{ marginLeft: "10px" }}
              ></span>
              <span>افزودن به سبد خرید</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductFeatures;
