import React, { useReducer } from "react";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../store/order-slice";
import { SendOrder } from "../../store/order-action";

const Checkout = () => {
  const token = useSelector((state) => state.auth.token);
  const UserFullName = useSelector((state) => state.basket.userFullName);
  const Mobile = useSelector((state) => state.basket.mobile);
  const initialState = {
    userFullName: UserFullName,
    mobile: Mobile,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      case "UPDATE_MOBILE":
        return {
          ...state,
          [action.mobile]: action.payload,
        };
      case "UPDATE_USERFULLNAME":
        return {
          ...state,
          [action.userFullName]: action.payload,
        };

      default:
        return state;
    }
  };
  const dispatch = useDispatch();
  const hideChekoutModalHandler = () => {
    dispatch(uiActions.toggleCheckoutModal(false));
  };
  const checkoutWarning = useSelector((state) => state.order.checkoutWarning);

  const [state, localDispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    localDispatch({
      type: "UPDATE_FIELD",
      fieldName: name,
      payload: value,
    });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    if (!state.mobile) {
      dispatch(
        orderActions.showCheckoutWarning({
          mobile: "این فیلد نباید خالی باشد",
        })
      );
    }
    if (!state.userFullName) {
      dispatch(
        orderActions.showCheckoutWarning({
          userFullName: "این فیلد نباید خالی باشد",
        })
      );
    }

    if (state.mobile && state.userFullName) {
      dispatch(orderActions.showCheckoutWarning({}));
      dispatch(SendOrder(token));
    }
  };

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
      }}
      id="modal-next"
    >
      <div
        style={{
          backgroundColor: "white",
          width: "60%",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f44153",
            color: "white",
            padding: "5px 10px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <p style={{ margin: "0", fontSize: "14px" }}>نهایی کردن خرید</p>
          <p style={{ margin: "0", fontSize: "12px" }}>ادامه مرحله خرید</p>
          <span
            onClick={hideChekoutModalHandler}
            className="fa fa-times close"
            style={{
              cursor: "pointer",
              left: "10px",
              top: "10px",
              position: "absolute",
            }}
          ></span>
        </div>
        <div>
          <div className="next-basket-contaienr">
            <div
              className="next-basket"
              style={{ padding: "10px 20px", fontSize: "14px" }}
            >
              <p style={{ marginBottom: "0" }}>
                مشخصات فردی که بلیط به نام او (به عنوان سرگروه) و همراهانش صادر
                میشود
              </p>
              <div>
                <div
                  style={{
                    paddingTop: "5px",
                    fontSize: "14px",
                    color: "#686e71",
                    width: "100%",
                  }}
                >
                  <div>
                    <span
                      className="fa fa-user"
                      style={{
                        marginLeft: "7px",
                        color: "#686e7192",
                        fontSize: "12px",
                      }}
                    ></span>
                    <span>نام و نام خانوادگی سرگروه</span>
                  </div>
                  <div>
                    <input
                      className="uk-input"
                      type="text"
                      name="userFullName"
                      value={state.userFullName}
                      onChange={handleInputChange}
                      placeholder="نام ونام خانوادگی خود را وارد کنید"
                      style={{ height: "38px" }}
                    />

                    {checkoutWarning && (
                      <p
                        className="invalid-msg"
                        style={{ fontSize: "12px", marginBottom: "5px" }}
                      >
                        {checkoutWarning.userFullName}
                      </p>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    paddingTop: "5px",
                    fontSize: "14px",
                    color: "#686e71",
                    width: "100%",
                  }}
                >
                  <div>
                    <span
                      className="fa fa-phone"
                      style={{
                        marginLeft: "7px",
                        color: "#686e7192",
                        fontSize: "12px",
                      }}
                    ></span>
                    <span>شماره موبایل</span>
                  </div>
                  <div>
                    <input
                      className="uk-input"
                      type="text"
                      name="mobile"
                      value={state.mobile}
                      onChange={handleInputChange}
                      placeholder="شماره موبایل خود را وارد کنید"
                      style={{ height: "38px" }}
                    />
                    {checkoutWarning && (
                      <p
                        className="invalid-msg"
                        style={{ fontSize: "12px", marginBottom: "5px" }}
                      >
                        {checkoutWarning.mobile}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div
                onClick={handleSubmit}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  paddingTop: "6px",
                }}
              >
                <button
                  className="uk-button uk-button-danger uk-button-large shine next-basket-btn mb-1"
                  type="submit"
                >
                  اتمام خرید و پرداخت
                </button>
                {/* <button
                  className="uk-button uk-button-danger uk-button-large shine next-basket-btn mb-1"
                  type="submit"
                >
                  ادامه خرید و موارد دیگر
                </button> */}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <button
                  className="uk-button uk-button-danger uk-button-large shine next-basket-btn mb-1"
                  type="submit"
                >
                  انصراف از خرید
                </button>
                <button
                  className="uk-button uk-button-danger uk-button-large shine next-basket-btn mb-1"
                  type="submit"
                >
                  مشاهده سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
