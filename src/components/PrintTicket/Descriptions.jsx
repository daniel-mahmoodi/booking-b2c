import React from "react";
import "./Tickets.css";
const Descriptions = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} className="descriptions">
      <div style={{ width: "50%" }}>
        <h2
          style={{
            fontSize: "16px",
            color: "darkblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/img/printTickets/information-circle-outline.svg"
            alt=""
            style={{ width: "20px", position: "relative" }}
          />
          <p>توضیحات</p>
        </h2>
        <p style={{ fontSize: "14px", color: "gray" }}>این یک متن تستی است</p>
      </div>
      <div style={{ width: "50%" }}>
        <h2
          style={{
            fontSize: "16px",
            color: "darkblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/img/printTickets/shield-half-outline.svg"
            alt=""
            style={{ width: "20px", position: "relative" }}
          />
          قوانین برنامه
        </h2>
        <p style={{ fontSize: "14px", color: "gray" }}>این یک متن تستی است</p>
      </div>
    </div>
  );
};

export default Descriptions;
