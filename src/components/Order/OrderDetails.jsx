import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./OrderDetails.module.css";
import { getOrderDetails } from "../../store/order-action";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import moment from "jalali-moment";
import OrderedTickets from "./OrderedTickets";
import { paymentMethod, ticketStatus } from "../Utilities/Utils";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderRefrence } = useParams();
  const token = useSelector((state) => state.auth.token);
  const selectedOrderDetails = useSelector(
    (state) => state.order.selectedOrderDetails
  );
  useEffect(() => {
    dispatch(getOrderDetails(token, orderRefrence));
  }, [dispatch, orderRefrence, token]);

  return (
    <div className={classes.body}>
      {Object.keys(selectedOrderDetails).length ? (
        <>
          <h2 className={classes.mainTitle}>جزئیات سفارش</h2>
          <div className={classes.details}>
            <div className={classes.item}>
              <div className={classes.title}>نام کاربر:</div>
              <div className={classes.data}>
                {selectedOrderDetails.userFullname}
              </div>
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
                {
                  <p>
                    {selectedOrderDetails.paymentDateTime &&
                      moment(
                        selectedOrderDetails.paymentDateTime.split("T")[0],
                        "YYYY/MM/DD"
                      )
                        .locale("fa")
                        .format("YYYY/MM/DD")}
                  </p>
                }
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.title}>مبلغ:</div>
              <div className={classes.data}>
                {selectedOrderDetails.totalAmount}
              </div>
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
              <div className={classes.title}>تیکت ستاتوس:</div>
              <div className={classes.data}>
                {ticketStatus[selectedOrderDetails.status]}
              </div>
            </div>
          </div>
          <div className={classes.orderItems}>
            {selectedOrderDetails.orderItems &&
              Object.keys(selectedOrderDetails.orderItems).length && (
                <>
                  <div className={classes.ticketsTitle}>لیست سفارشات</div>
                  <OrderedTickets data={selectedOrderDetails.orderItems} />
                </>
              )}
          </div>
        </>
      ) : (
        <div>اطلاعاتی یافت نشد.</div>
      )}
    </div>
  );
};

export default OrderDetails;
