import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../store/order-action";
import OrderItem from "./OrderItem";
import TableTitles from "./TableTitles";
import MyLoadnig from "../Layout/MyLoading";
import classes from "./ListOfOrders.module.css";
import BreadCrumb from "../Layout/BreadCrumb";
import NoContentSVG from "../Layout/NoContentSVG";
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
      <BreadCrumb location={"/orders"} />
      <div className={classes.listContainer}>
        {Object.keys(listOfOrders).length ? (
          <>
            {/* <h2 className={classes.title}>لیست سفارشات</h2> */}
            <TableTitles />
            {listOfOrders.map((order, index) => (
              <OrderItem
                key={order.orderRefrence}
                data={order}
                rowNumber={index + 1}
              />
            ))}
          </>
        ) : (
          <div>
            {allOrdersLoading ? (
              <MyLoadnig color={"#ee395b"} />
            ) : (
              <div className={classes.body}>
                <div className={classes.noContentIcon}>
                  <NoContentSVG />
                </div>
                {token ? (
                  <>
                    <p className={classes.noCotentTitle}>
                      لیست سفارشات یافت نشد. لطفا مجددا اقدام فرمایید.
                    </p>
                  </>
                ) : (
                  <p className={classes.noCotentTitle}>
                    لطفا ابتدا وارد حساب کاربری خود شوید
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListOfOrders;
