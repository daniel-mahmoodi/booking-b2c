import React from "react";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const PaymentButton = () => {
  const dispatch = useDispatch();

  const showChekoutModalHandler = () => {
    dispatch(uiActions.toggleCheckoutModal(true));
  };
  return (
    <div onClick={showChekoutModalHandler}>
      <button className="uk-button uk-button-danger uk-button-large shine">
        پرداخت
      </button>
    </div>
  );
};

export default PaymentButton;
