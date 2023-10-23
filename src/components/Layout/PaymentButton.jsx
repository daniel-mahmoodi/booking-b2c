import React from "react";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../Hook/useModal";

const PaymentButton = () => {
  const dispatch = useDispatch();
  const { toggleModal } = useModal();
  const isBasketEmpety = useSelector((state) => state.basket.items.length);
  console.log("isBasketEmpety", isBasketEmpety);
  const showChekoutModalHandler = () => {
    dispatch(uiActions.toggleCheckoutModal(true));
    toggleModal();
  };
  return (
    <div>
      {isBasketEmpety ? (
        <button
          onClick={showChekoutModalHandler}
          className="uk-button uk-button-danger uk-button-large shine"
        >
          پرداخت
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default PaymentButton;
