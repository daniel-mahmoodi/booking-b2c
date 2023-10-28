import React from "react";
import classes from "./Tickets.module.css";
import moment from "jalali-moment";
const ClientTicket = ({
  data,
  eventExcecuteDateTime,
  eventExcecuteTime,
  clientMobile,
}) => {
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
          className={`${classes.ticketItem} ${classes.ticket}`}
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
                {data.clientFullName}
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
                {clientMobile}
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
                <p>
                  {eventExcecuteDateTime &&
                    moment(eventExcecuteDateTime.split("T")[0], "YYYY/MM/DD")
                      .locale("fa")
                      .format("YYYY/MM/DD")}
                </p>
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
                {eventExcecuteTime}
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
                ندارد
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
                ندارد
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

export default ClientTicket;
