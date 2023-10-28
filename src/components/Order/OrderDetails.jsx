import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./OrderDetails.module.css";
import { getOrderDetails } from "../../store/order-action";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import OrderedTickets from "./OrderedTickets";

import MyLoading from "../Layout/MyLoading";
import OrderInfo from "./OrderInfo";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { orderRefrence } = useParams();
  const token = useSelector((state) => state.auth.token);
  const selectedOrderDetails = useSelector(
    (state) => state.order.selectedOrderDetails
  );
  const orderDetailsLoading = useSelector(
    (state) => state.order.orderDetailsLoading
  );
  useEffect(() => {
    dispatch(getOrderDetails(token, orderRefrence));
  }, [dispatch, orderRefrence, token]);

  return (
    <div className={classes.body}>
      {Object.keys(selectedOrderDetails).length ? (
        <>
          <h2 className={classes.mainTitle}>جزئیات سفارش</h2>
         <OrderInfo selectedOrderDetails={selectedOrderDetails} />
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
        <div>
          {orderDetailsLoading ? (
            <MyLoading color={"#ee395b"} />
          ) : (
            <div>اطلاعاتی یافت نشد.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
