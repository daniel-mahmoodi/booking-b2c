import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import classes from "./OrderItem.module.css";
import moment from "jalali-moment";
import { paymentMethod } from "../Utilities/Utils";
import { orderActions } from "../../store/order-slice";
import { profileActions } from "../../store/profile-slice";
import { orderStatus } from "../Utilities/Utils";

const OrderItem = ({ data }) => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const seeMoreHandler = () => {
    if (data) {
      // history.push(`/profile/${data.orderRefrence}`);
      dispatch(orderActions.setOrderRefrence(data.orderRefrence));
      dispatch(profileActions.selectActiveTab("orderDetails"));
    }
  };
  return (
    <div>
      {Object.keys(data).length ? (
        <div onClick={seeMoreHandler} className={classes.body}>
          <div className={classes.header}>
            {data.isPayed ? (
              <p className={classes.isPayed}>پرداخت شد</p>
            ) : (
              <p className={classes.notPayed}>پرداخت نشد</p>
            )}
          </div>
          <div className={classes.row}>
            <div className={classes.item}>
              <div className={classes.itemTitle}>تاریخ:</div>
              <p>
                {data.paymentDateTime &&
                  moment(data.paymentDateTime.split("T")[0], "YYYY/MM/DD")
                    .locale("fa")
                    .format("YYYY/MM/DD")}
              </p>
            </div>
            <div className={classes.item}>
              <div className={classes.itemTitle}>مبلغ:</div>

              {data.totalAmount}
            </div>
            <div className={classes.item}>
              <div className={classes.itemTitle}>روش پرداخت:</div>
              {paymentMethod[data.paymentMethod - 1]}
            </div>
            <div className={classes.item}>
              <div className={classes.itemTitle}>وضعیت سفارش:</div>
              {orderStatus[data.status]}
            </div>
            {/* <div className={classes.item}>
              <div className={classes.itemTitle}>درگاه:</div>
              {data.paymentGateway}
            </div> */}
            <div className={`${classes.item} ${classes.payingSituation}`}>
              <div className={classes.itemTitle}>وضعیت پرداخت:</div>
              {data.isPayed ? (
                <p className={classes.isPayed}>پرداخت شد</p>
              ) : (
                <p className={classes.notPayed}>پرداخت نشد</p>
              )}
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.desc}>
              {data.description && (
                <>
                  <div>توضیحات:</div>
                  <div>{data.description}</div>
                </>
              )}
            </div>
          </div>
          {/* <div className={classes.more}>
            <button onClick={seeMoreHandler} className={classes.button}>
              جزیات بیشتر
            </button>
          </div> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default OrderItem;
