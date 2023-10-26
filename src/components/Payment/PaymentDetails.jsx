import React, { Fragment, useEffect } from "react";
import classes from "./PaymentDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getPaymentDetails } from "../../store/order-action";
import PaymentTable from "./PaymentTable";
import MyLoading from "../Layout/MyLoading";
const PaymentDetails = () => {
  const { paymentId } = useParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const paymentDetails = useSelector((state) => state.order.paymentDetails);
  useEffect(() => {
    if (paymentId) dispatch(getPaymentDetails(token, paymentId));
  }, [dispatch, paymentId, token]);
  
  const ticketPrintHandler = () => {
  };
  return (
    <Fragment>
      {Object.keys(paymentDetails).length ? (
        <div className={classes.body}>
          <div className={classes.title}>رسید تراکنش</div>
          <div className={classes.successfulOrNot}>
            {paymentDetails.isSuccessful ? (
              <div className={classes.isSuccessful}>تراکنش موفق</div>
            ) : (
              <>
                <div className={classes.isNotSuccessful}>تراکنش ناموفق</div>
                <div className={classes.isNotSuccessfulDesc}>
                  درصورتی که مبلغی از حساب شما کسر شده است، تا 72 ساعت آینده به
                  حساب شما بر می گردد.
                </div>
              </>
            )}
          </div>
          <PaymentTable paymentDetails={paymentDetails} />
          <div className={classes.buttons}>
            <button onClick={ticketPrintHandler} className={classes.button}>
              چاپ
            </button>
            {/* <button className={classes.button}>بازگشت</button> */}
          </div>
        </div>
      ) : (
        <div className={classes.body}>
          <div className={classes.noData}>
            <p>هیچ اطلاعاتی دریافت نشد.</p>
            <MyLoading color={"#b93441"} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PaymentDetails;
