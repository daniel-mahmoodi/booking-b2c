import React, { Fragment, useEffect } from "react";
import BasketItem from "./BasketItem";
import { useDispatch, useSelector } from "react-redux";
import EventList from "./EventList";
import { uiActions } from "../../store/ui-slice";
import PaymentButton from "../Layout/PaymentButton";
import classes from "./BasketTab.module.css";
import BreadCrumb from "../Layout/BreadCrumb";
function BasketTab() {
  const basketItems = useSelector((state) => state.basket.items);
  console.log("basketItems", basketItems);
  const totalDiscountedPrice = useSelector(
    (state) => state.basket.totalDiscountedPrice
  );

  return (
    <Fragment>
      {basketItems.length ? (
        <div className="profile-left" id="basket">
          <BreadCrumb location={'/basket'}/>

          <div className="basket-contaienr" data-basket-detail-step="1">
            <div className="basket">
              <ul className="data-header">
                <li>عنوان</li>
                <li>قیمت واحد</li>
                <li>تعداد</li>
                <li>قیمت کل</li>
              </ul>
              {basketItems &&
                basketItems.map((event) => (
                  <EventList key={event.id} items={event} />
                ))}

              {/* End of item block */}
              <div className="basket-footer d-flex justify-between align-center px-3">
                <div>
                  <span>مجموع قیمت :</span>
                  <span>
                    {Number(totalDiscountedPrice).toLocaleString()} تومان
                  </span>
                </div>
                {/* <div className="discount-container">
              <button>اعمال</button>
              <input type="text" />
            </div> */}
              </div>
            </div>
            {/* <div className="uk-width-1-1 uk-first-column d-flex justify-end mt-2">
          <button
            className="uk-button uk-button-danger uk-button-large shine"
            type="submit"
          >
            پرداخت
          </button>
        </div> */}
          </div>
          <div className="basket-contaienr" data-basket-detail-step="2">
            <p className="mb-0 fw-md">ادامه روند خرید و پرداخت:</p>
            <div className="basket-divider"></div>
            <p className="mt-1 basket-step2-alert">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i> با
              انتخاب نحوه پرداخت به صفحه بانک هدایت خواهید شد.
            </p>
            <div className="d-flex justify-content-between">
              <div className="basket-step2-price-show">
                <p className="my-0 fw-md">مبلغ قابل پرداخت</p>
                <p className="my-0">
                  {Number(totalDiscountedPrice).toLocaleString()} تومان
                </p>
              </div>
              <PaymentButton />
            </div>
          </div>
          <div className="basket-contaienr" data-basket-detail-step="3">
            3
          </div>
        </div>
      ) : (
        <div className={classes.noContentIcon}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <circle
                cx="176"
                cy="416"
                r="16"
                fill="none"
                stroke="darkRed"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <circle
                cx="400"
                cy="416"
                r="16"
                fill="none"
                stroke="darkRed"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="darkRed"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M48 80h64l48 272h256"
              />
              <path
                d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                fill="none"
                stroke="darkRed"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </div>
          <p>سبدشما خالی است</p>
        </div>
      )}
    </Fragment>
  );
}

export default BasketTab;
