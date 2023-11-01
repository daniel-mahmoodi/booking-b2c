import React from "react";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../Hook/useModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PaymentButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { toggleModal } = useModal();
  const token = useSelector((state) => state.auth.token);
  const isBasketEmpety = useSelector((state) => state.basket.items.length);
  const showChekoutModalHandler = () => {
    if (token) {
      dispatch(uiActions.toggleCheckoutModal(true));
      toggleModal();
    } else {
      history.push("/login");
      toggleModal();
    }
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
