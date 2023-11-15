import React from "react";
import classes from "./OrderDetails.module.css";
import { paymentMethod, orderStatus } from "../Utilities/Utils";
import moment from "jalali-moment";

const OrderInfo = ({ selectedOrderDetails }) => {
  console.log("selectedOrderDetails", selectedOrderDetails);
  return (
    <div className={classes.details}>
      <div className={classes.item}>
        <div className={classes.title}>نام کاربر:</div>
        <div className={classes.data}>{selectedOrderDetails.userFullname}</div>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>ایمیل:</div>
        <div className={classes.data}>{selectedOrderDetails.email}</div>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>شماره موبایل:</div>
        <div className={classes.data}>{selectedOrderDetails.mobile}</div>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>تاریخ ثبت سفارش:</div>
        <div className={classes.data}>
          <p>
            {selectedOrderDetails.paymentDateTime &&
              moment(
                selectedOrderDetails.paymentDateTime.split("T")[0],
                "YYYY/MM/DD"
              )
                .locale("fa")
                .format("YYYY/MM/DD")}
          </p>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>مبلغ:</div>
        <div className={classes.data}>{selectedOrderDetails.totalAmount}</div>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>روش پرداخت:</div>
        <div className={classes.data}>
          {paymentMethod[selectedOrderDetails.paymentMethod - 1]}
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>درگاه:</div>
        <div className={classes.data}>
          {selectedOrderDetails.paymentGateway}
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>وضعیت پرداخت:</div>
        <div className={classes.data}>
          {selectedOrderDetails.isPayed ? (
            <p className={classes.isPayed}>پرداخت شد</p>
          ) : (
            <p className={classes.notPayed}>پرداخت نشد</p>
          )}
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>وضعیت سفارش:</div>
        <div className={classes.data}>
          {orderStatus[selectedOrderDetails.status]}
        </div>
      </div>
      {selectedOrderDetails.status === 0 ? (
        <div className={classes.warning}>
             اگر بعد از 30 دقیقه سفارش خود را نهایی نکنید این سفارش لغو خواهد شد.
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OrderInfo;
