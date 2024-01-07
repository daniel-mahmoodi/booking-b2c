import React from "react";
import RightSideBar from "./RightSideBar/RightSideBar";
import BasketTab from "./BasketTab";
import ListOfOrders from "../Order/ListOfOrders";
import OrderDetails from "../Order/OrderDetails";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./profile.module.css";

const Profile = () => {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <div className={classes.rightSideBar}>
          <RightSideBar />
        </div>
        <div className={classes.leftSideBar}>
          <Switch>
            <Route path="/profile/basket" exact>
              <BasketTab />
            </Route>
            <Route path="/profile/orders" exact>
              <ListOfOrders />
            </Route>
            <Route path="/profile/orders/details" exact>
              <OrderDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Profile;
