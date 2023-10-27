import React from "react";

const TicketsDescriptions = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      className="resp-header"
    >
      <div style={{ width: "120px" }} className="item1">
        <img src="/assets/img/printTickets/img_top1.png" style={{ width: "100%" }} alt="" />
      </div>
      <div style={{ width: "calc(100% - 240px)" }} className="item2">
        <h1 style={{ fontSize: "16px", textAlign: "center" }}>
          کشتی تفریحی آرتمیس
        </h1>
        <div
          style={{
            width: "100%",
            padding: "0 30px",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "10px",
          }}
          className="details"
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src="/assets/img/printTickets/person-outline.svg"
              alt=""
              style={{
                width: "20px",
                position: "relative",
                top: "-4px",
                left: "4px",
              }}
            />
            <span style={{ fontSize: "16px", color: "darkblue" }}>
              نام مشتری:
            </span>
            <span
              style={{ fontSize: "14px", marginRight: "4px", color: "gray" }}
            >
              شریعتمداری
            </span>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src="/assets/img/printTickets/phone-portrait-outline.svg"
              alt=""
              style={{
                width: "20px",
                position: "relative",
                top: "-4px",
                left: "4px",
              }}
            />
            <span style={{ fontSize: "16px", color: "darkblue" }}>
              تلفن همراه:
            </span>
            <span
              style={{ fontSize: "14px", marginRight: "4px", color: "gray" }}
            >
              ۰۹۱۰۰۹۶۶۶۸۸
            </span>
          </div>
          {/* Repeat this structure for other content within the "details" section */}
        </div>
      </div>
      <div style={{ width: "120px" }} className="item3">
        <img src="/assets/img/printTickets/img_top2.png" style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
};

export default TicketsDescriptions;
