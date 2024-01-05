import React from "react";
import { useSelector } from "react-redux";
import { useSubmitOrder } from "../Hook/useSubmitOrder";
import MyLoading from "./MyLoading";
import { clickable } from "../../Utilities/Utils";

const SubmitButton = ({ id }) => {
  const acceptButtonLoading = useSelector(
    (state) => state.event.acceptButtonLoading
  );
  const serviceDetails = useSelector((state) => state.event.serviceDetails);
  const { submitOrder } = useSubmitOrder(id);

  const submitOrderHandler = (event) => {
    clickable(event);
    submitOrder();
  };

  return (
    <div
      className="blog-card__more"
      style={{
        textAlign: "center",
        paddingBottom: "15px",
      }}
    >
      <button
        className="uk-button uk-button-default"
        onClick={submitOrderHandler}
      >
        {acceptButtonLoading && serviceDetails.id === id ? (
          <MyLoading color={"#ffffff"} />
        ) : (
          "ثبت سفارش"
        )}
      </button>
    </div>
  );
};

export default SubmitButton;
