import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../store/order-action";
import OrderItem from "./OrderItem";
import TableTitles from "./TableTitles";
import classes from "./ListOfOrder.module.css";
const ListOfOrders = () => {
  const dispatch = useDispatch();
  const listOfOrders = useSelector((state) => state.order.listOfOrders);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(getAllOrders(token));
  }, [dispatch, token]);
  return (
    <div className={classes.body}>
      {Object.keys(listOfOrders).length ? (
        <>
          <h2 className={classes.title}>لیست سفارشات</h2>
          <TableTitles />
          {listOfOrders.map((order) => (
            <OrderItem key={order.orderRefrence} data={order} />
          ))}
        </>
      ) : (
        <div>لیست سفارشات یافت نشد. لطفا مجددا اقدام فرمایید.</div>
      )}
    </div>
  );
};

export default ListOfOrders;
