import React from "react";
import classes from "./Tickets.module.css";
const Descriptions = ({ termOfUse, description }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap" }}
      className={classes.descriptions}
    >
      {description && (
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
          <p style={{ fontSize: "14px", color: "gray" }}>{description}</p>
        </div>
      )}
      {termOfUse && (
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
          <p style={{ fontSize: "14px", color: "gray" }}>{termOfUse}</p>
        </div>
      )}
    </div>
  );
};

export default Descriptions;
