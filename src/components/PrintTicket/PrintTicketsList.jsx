import React from "react";
import classes from "./Tickets.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getOrderTicketsDetails } from "../../store/order-action";
import { useEffect } from "react";
import ClientOrderDetails from "./ClientOrderDetails";
import GoForPrint from "./GoForPrint";
const PrintTicketsList = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const orderTicketsDetails = useSelector(
    (state) => state.order.orderTicketsDetails
  );
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(getOrderTicketsDetails(token, orderId));
  }, [dispatch, orderId, token]);
  console.log("orderTicketsDetails", orderTicketsDetails);

  return (
    <div className={classes.body}>
      {orderTicketsDetails ? (
        orderTicketsDetails.map((order) => (
          <ClientOrderDetails key={order.orderRefernce} data={order} />
        ))
      ) : (
        <div>اطلاعاتی دریافت نشد.</div>
      )}
      <GoForPrint />
    </div>
  );
};

export default PrintTicketsList;
