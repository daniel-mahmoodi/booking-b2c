import React from "react";
import PaymentButton from "../Layout/PaymentButton";
import { useModal } from "../Hook/useModal";

const AcceptTicket = () => {
  const { toggleModal } = useModal();

  return (
    <div
      style={{
        width: "100%",
        borderTop: "1px solid lightgray",
        padding: "10px 15px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <PaymentButton />
      <button onClick={toggleModal} className="uk-button uk-button-large shine">
        <span>بستن</span>
      </button>
    </div>
  );
};

export default AcceptTicket;
