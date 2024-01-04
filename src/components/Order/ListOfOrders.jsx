import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../store/order-action";
import OrderItem from "./OrderItem";
import TableTitles from "./TableTitles";
import MyLoadnig from "../Layout/MyLoading";
import classes from "./ListOfOrder.module.css";
import BreadCrumb from "../Layout/BreadCrumb";
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
                {token ? (
                  <>
                    <div className={classes.noContentIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="ionicon"
                        viewBox="0 0 512 512"
                      >
                        <circle
                          cx="176"
                          cy="416"
                          r="16"
                          fill="none"
                          stroke="darkRed"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        />
                        <circle
                          cx="400"
                          cy="416"
                          r="16"
                          fill="none"
                          stroke="darkRed"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        />
                        <path
                          fill="none"
                          stroke="darkRed"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                          d="M48 80h64l48 272h256"
                        />
                        <path
                          d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                          fill="none"
                          stroke="darkRed"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        />
                      </svg>
                    </div>
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
