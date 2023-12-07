import React, { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MainEventsPage from "../Events/MainEventsPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfCatalogs } from "../../store/catalog-action";
import HomePage from "../Home/HomePage/HomePage";
import ServiceDetails from "../Card/ServiceDetails";
import Registration from "../Auth/Registration";
import Profile from "../Profile/Profile";
import { Login } from "../Auth/Login";
import {
  sendCartData,
} from "../../store/basket-action";
import { basketActions } from "../../store/basket-slice";
import PaymentDetails from "../Payment/PaymentDetails";
import ListOfOrders from "../Order/ListOfOrders";
import OrderDetails from "../Order/OrderDetails";
import PrintTicketsList from "../PrintTicket/PrintTicketsList";
import PrintPage from "../PrintTicket/PrintPage";
import Cars from "../Catalog/Items/Cars/Cars";
const MainPage = () => {
  const dispatch = useDispatch();
  const basketChanged = useSelector((state) => state.basket.basketChanged);
  const items = useSelector((state) => state.basket.items);
  const token = useSelector((state) => state.auth.token);
  
  useEffect(() => {
    dispatch(fetchListOfCatalogs());
    if (token) {
      dispatch(sendCartData(items, token,false));
      console.log("update");
    }
  }, [dispatch, token]);
  // prevent footer component shows in login and signin pages
  const location = useLocation();
  const excludeFooterRoutes = ["/login", "/signup", "/print-page"];
  const shouldShowFooter = !excludeFooterRoutes.includes(location.pathname);
  const excludeNavbarRoutes = ["/print-page"];
  const shouldShowNavbar = !excludeNavbarRoutes.includes(location.pathname);
  useEffect(() => {
    if (basketChanged && token) {
      console.log("update after basketChanged");
      const timer = setTimeout(() => {
        dispatch(sendCartData(items, token,true));
        dispatch(basketActions.toggleBasketChanges(false));
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [basketChanged, dispatch, items, token]);

  return (
    <div className="page-home">
      <div className="page-wrapper">
        <main className="page-main">
          {shouldShowNavbar && <Navbar />}
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/catalog" exact>
              <MainEventsPage />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/Payment/:paymentId" exact>
              <PaymentDetails />
            </Route>
            <Route path="/service-details/:serviceId" exact>
              <ServiceDetails />
            </Route>
            {/* <Route path="/profile/:orderRefrence" exact>
              <OrderDetails />
            </Route> */}
            <Route path="/print-tickets/:orderId" exact>
              <PrintTicketsList />
            </Route>
            <Route path="/cars" exact>
              <Cars />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Registration />
            </Route>
            <Route path="/print-page" exact>
              <PrintPage />
            </Route>
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          </Switch>
          {shouldShowFooter && <Footer />}
        </main>
      </div>
    </div>
  );
};

export default MainPage;
