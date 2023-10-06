import React from "react";
import BasketItem from "./BasketItem";
import { useSelector } from "react-redux";

function BasketTab() {
  const items = useSelector((state) => state.basket.items);
  const totalDiscountedPrice = useSelector(
    (state) => state.basket.totalDiscountedPrice
  );
  console.log("items", items);
  return (
    <div className="profile-left" id="basket">
      <div className="d-flex p-2 basket-top-container">
        <a
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
        </a>
        <a
          href="/factor.html?element=basket&step=3"
          className="basket-top-item"
          data-basket-title-step="3"
        >
          <span className="sequesnce">۳</span>
          <span>دریافت کدها</span>
        </a>
      </div>

      <div className="basket-contaienr" data-basket-detail-step="1">
        <div className="basket">
          <ul className="data-header">
            <li>تخفیف ها</li>
            <li>قیمت واحد</li>
            <li>تعداد</li>
            <li>قیمت کل</li>
          </ul>

          {items.map((item) => (
            <BasketItem key={item.id} data={item} />
          ))}
          {/* End of item block */}
          <div className="basket-footer d-flex justify-between align-center px-3">
            <div>
              <span>مجموع قیمت :</span>{" "}
              <span>{totalDiscountedPrice} تومان</span>
            </div>
            <div className="discount-container">
              <button>اعمال</button>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="uk-width-1-1 uk-first-column d-flex justify-end mt-2">
          <button
            className="uk-button uk-button-danger uk-button-large shine"
            type="submit"
          >
            پرداخت
          </button>
        </div>
      </div>
      <div className="basket-contaienr" data-basket-detail-step="2">
        <p className="mb-0 fw-md">نحوه پرداخت</p>
        <div className="basket-divider"></div>
        <p className="mt-1 basket-step2-alert">
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i> با
          انتخاب نحوه پرداخت به صفحه بانک هدایت خواهید شد.
        </p>
        <div className="d-flex justify-content-between">
          <div className="basket-step2-price-show">
            <p className="my-0 fw-md">مبلغ قابل پرداخت</p>
            <p className="my-0">{totalDiscountedPrice} تومان</p>
          </div>
          <div>
            <button
              className="uk-button uk-button-danger uk-button-large shine"
              type="submit"
            >
              پرداخت
            </button>
          </div>
        </div>
      </div>
      <div className="basket-contaienr" data-basket-detail-step="3">
        3
      </div>
    </div>
  );
}

export default BasketTab;
