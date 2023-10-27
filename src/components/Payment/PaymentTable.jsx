import React from "react";
import classes from "./PaymentTable.module.css";
import moment from "jalali-moment";
import { paymentsType } from "../Utilities/Utils";

const PaymentTable = ({ paymentDetails }) => {
  return (
    <div className={classes.body}>
      <div className={classes.bodyTop}>
        <div className={classes.date}>
          <div className={classes.title}>تاریخ</div>
          <div className={classes.desc}>
            <p>
              {paymentDetails.paymentDateTime &&
                moment(
                  paymentDetails.paymentDateTime.split("T")[0],
                  "YYYY/MM/DD"
                )
                  .locale("fa")
                  .format("YYYY/MM/DD")}
            </p>
            {/* {`${Year}/${MonthNum}/${DayOfMonth}`} */}
          </div>
        </div>
        <div className={classes.price}>
          <div className={classes.title}>مبلغ پرداختی</div>
          <div className={classes.desc}>{paymentDetails.amount}</div>
        </div>
      </div>
      <div className={classes.bodyTop}>
        <div className={classes.paymentGateWay}>
          <div className={classes.title}>درگاه</div>
          <div className={classes.desc}>{paymentDetails.paymentGateWay}</div>
        </div>
        <div>
          <div className={classes.title}>نوع تراکنش</div>
          <div className={classes.desc}>
            {paymentsType[paymentDetails.paymentType - 1]}
          </div>
        </div>
      </div>
      <div className={classes.bodyMiddle}>
        <div>
          <div className={classes.title}>توضیحات</div>
          <div className={classes.detail}>
            {paymentDetails.description === "Payment is successful." ? (
              <div className={classes.detailsChild}>
                <p>پرداخت موفقیت آمیز</p>
                <p>می توانید از طریق دکمه ی زیر بلیط های خود را دریافت کنید.</p>
              </div>
            ) : (
              paymentDetails.description
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
