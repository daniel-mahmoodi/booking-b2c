import React from "react";
import { submitOrderHandler } from "../Utilities/Utils";
import SubmitButton from "../Layout/SubmitButton";

const ProductFeatures = ({ price, id }) => {
  return (
    <div className="widjet widjet-category">
      {/* <h4 className="widjet__title" style={{ fontSize: "14px" }}>
        ویژگی ها
      </h4> */}
      <ul
        className="list-category list-checked"
        style={{ listStyleType: "none", fontSize: "14px" }}
      >
        <li>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>قیمت</span>
            <div>
              {/* <span
                style={{ color: "red", textDecoration: "line-through red" }}
              >
                ۱۲,۰۰۰ تومان
              </span>
              <br /> */}
              <span style={{ color: "green" }}>{price} تومان</span>
            </div>
          </div>
          <SubmitButton id={id} />
        </li>
      </ul>
    </div>
  );
};

export default ProductFeatures;
