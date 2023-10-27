import React from "react";
import "./Tickets.css";
const AdditionalInfo = () => {
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4px 0",
        }}
      >
        <img
          src="/assets/img/printTickets/home-outline.svg"
          alt=""
          style={{ width: "20px", position: "relative" }}
        />
        <span style={{ fontSize: "16px", color: "darkblue" }}>
          صادر شده توسط:
        </span>
        <span style={{ color: "rgb(119, 119, 119)", fontSize: "14px" }}>
          شرکت خدمات گردشگری و مسافرتی توشه آفرین کیش
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "4px 0",
        }}
      >
        <img
          src="/assets/img/printTickets/person-outline.svg"
          alt=""
          style={{ width: "20px", position: "relative" }}
        />
        <span style={{ fontSize: "16px", color: "darkblue" }}>
          متصدی صدور:{" "}
        </span>
        <span style={{ color: "rgb(119, 119, 119)", fontSize: "14px" }}>
          شخص تستی
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          padding: "4px 0",
        }}
      >
        <img
          src="/assets/img/printTickets/location-outline.svg"
          alt=""
          style={{ width: "20px", position: "relative" }}
        />
        <span style={{ fontSize: "16px", color: "darkblue" }}>آدرس: </span>
        <span style={{ color: "rgb(119, 119, 119)", fontSize: "14px" }}>
          کیش
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          padding: "4px 0",
        }}
      >
        <img
          src="/assets/img/printTickets/call-outline.svg"
          alt=""
          style={{ width: "20px", position: "relative" }}
        />
        <span style={{ fontSize: "16px", color: "darkblue" }}>
          تلفن پشتیبانی:{" "}
        </span>
        <span style={{ color: "rgb(119, 119, 119)", fontSize: "14px" }}>
          ۰۹۱۰۰۹۶۶۶۸۸
        </span>
      </div>
    </div>
  );
};

export default AdditionalInfo;
