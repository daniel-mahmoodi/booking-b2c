import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { profileActions } from "../../store/profile-slice";
import NavShoppingItems from "./NavShoppingItems";

const ShoppingBag = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.basket.items);
  const totalQuantity = useSelector((state) => state.basket.totalQuantity);
  const totalDiscountedPrice = useSelector(
    (state) => state.basket.totalDiscountedPrice
  );
  const sendUserToBasketHandler = () => {
    history.push("/profile");
    dispatch(profileActions.selectActiveTb("basket"));
  };
  return (
    <div
      style={{ margin: "0 10px", position: "relative" }}
      className="bag-item"
    >
      <a>
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
        {items.map((item) => (
          <NavShoppingItems key={item.id} data={item} />
        ))}
        {totalDiscountedPrice > 0 && (
          <>
            <hr />
            <p className="total-price-box">
              <span>مبلغ قابل پرداخت</span>
              <span className="text-green fw-md">
                {totalDiscountedPrice} تومان
              </span>
            </p>
          </>
        )}
        <hr />
        <a
          onClick={sendUserToBasketHandler}
          className="uk-button uk-button-danger shine"
        >
          {totalDiscountedPrice > 0 ? "مشاهده سبد خرید" : "سبد شما خالی است"}
        </a>
      </div>
      {totalQuantity > 0 && (
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
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default ShoppingBag;
