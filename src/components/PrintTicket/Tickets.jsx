import React from "react";
import "./Tickets.css";
const Tickets = () => {
 
  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            border: "1px solid gray",
            borderRadius: "20px",
            backgroundColor: "rgb(243, 241, 241)",
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
          }}
          className="ticketItem ticket"
        >
          <div
            style={{
              width: "calc(100% - 200px)",
              padding: "0 30px",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
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
                style={{ fontSize: "14px", margin: "0 4px", color: "gray" }}
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
                style={{ fontSize: "14px", margin: "0 4px", color: "gray" }}
              >
                ۰۹۱۰۰۹۶۶۶۸۸
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
                src="/assets/img/printTickets/calendar-outline.svg"
                alt=""
                style={{
                  width: "20px",
                  position: "relative",
                  top: "-4px",
                  left: "4px",
                }}
              />
              <span style={{ fontSize: "16px", color: "darkblue" }}>
                تاریخ اجرا:
              </span>
              <span
                style={{ fontSize: "14px", margin: "0 4px", color: "gray" }}
              >
                ۱۴۰۲/۰۷/۰۸
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
                src="/assets/img/printTickets/calendar-outline.svg"
                alt=""
                style={{
                  width: "20px",
                  position: "relative",
                  top: "-4px",
                  left: "4px",
                }}
              />
              <span style={{ fontSize: "16px", color: "darkblue" }}>
                زمان اجرا:
              </span>
              <span
                style={{ fontSize: "14px", margin: "0 4px", color: "gray" }}
              >
                ۲۱:۳۰ - ۲۲:۳۰
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
                src="/assets/img/printTickets/calendar-outline.svg"
                alt=""
                style={{
                  width: "20px",
                  position: "relative",
                  top: "-4px",
                  left: "4px",
                }}
              />
              <span style={{ fontSize: "16px", color: "darkblue" }}>
                تاریخ صدور:
              </span>
              <span
                style={{ fontSize: "14px", margin: "0 4px", color: "gray" }}
              >
                ۱۴۰۲/۰۷/۰۸
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
                src="/assets/img/printTickets/cart-outline.svg"
                alt=""
                style={{
                  width: "20px",
                  position: "relative",
                  top: "-4px",
                  left: "4px",
                }}
              />
              <span style={{ fontSize: "16px", color: "darkblue" }}>
                رفرنس:
              </span>
              <span
                style={{ fontSize: "14px", margin: "0 4px", color: "gray" }}
              >
                ۲۱:۳۰ - ۲۲:۳۰
              </span>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              width: "200px",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/assets/img/printTickets/qr_code.png"
              alt=""
              style={{ display: "inline-block", width: "80%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
