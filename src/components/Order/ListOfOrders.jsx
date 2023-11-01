import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../store/order-action";
import OrderItem from "./OrderItem";
import TableTitles from "./TableTitles";
import MyLoadnig from "../Layout/MyLoading";
import classes from "./ListOfOrder.module.css";
const ListOfOrders = () => {
  const dispatch = useDispatch();
  const listOfOrders = useSelector((state) => state.order.listOfOrders);
  const allOrdersLoading = useSelector((state) => state.order.allOrdersLoading);
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    token && dispatch(getAllOrders(token));
  }, [dispatch, isLoggedIn, token]);
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
        <div>
          {allOrdersLoading ? (
            <MyLoadnig color={"#ee395b"} />
          ) : (
            <div className={classes.body}>
              {token ? (
                <p> لیست سفارشات یافت نشد. لطفا مجددا اقدام فرمایید.</p>
              ) : (
                <p> لطفا ابتدا وارد حساب کاربری خود شوید</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListOfOrders;
