import React from "react";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./BreadCrumb.module.css";
const BreadCrumb = ({ location }) => {
  //   const location = useLocation();

  //   let currentLink = "";
  const crumbs = location
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      //  const currentLinkLength = currentLink.length;
      //  currentLink += `/${crumb}`;
      return (
        <a className={classes.basketTopItem}>
          {/* <span className="sequesnce">۱</span> */}
          <span>
            {crumb === "orders" && "لیست سفارشات"}
            {crumb === "details" && "جزئیات"}
            {crumb === "basket" && "سبد خرید"}
          </span>
        </a>
      );
    });
  return (
    <div className="d-flex p-2 basket-top-container">
      {crumbs}
      {/* <a
        href="/factor.html?element=basket&step=1"
        className="basket-top-item active"
        data-basket-title-step="1"
      >
        <span className="sequesnce">۱</span>
        <span>سبد خرید</span>
      </a>
      <a
        href="/factor.html?element=basket&step=2"
        className="basket-top-item"
        data-basket-title-step="2"
      >
        <span className="sequesnce">۲</span>
        <span>پرداخت</span>
      </a> */}
      {/* <a
 href="/factor.html?element=basket&step=3"
 className="basket-top-item"
 data-basket-title-step="3"
>
 <span className="sequesnce">۳</span>
 <span>دریافت کدها</span>
</a> */}
    </div>
  );
};

export default BreadCrumb;
