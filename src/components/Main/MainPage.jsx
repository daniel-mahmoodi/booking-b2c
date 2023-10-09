import React, { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MainEventsPage from "../Events/MainEventsPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchListOfCatalogs } from "../../store/catalog-action";
import HomePage from "../Home/HomePage/HomePage";
import SinglePage from "../Card/SinglePage";
import Registration from "../Auth/Registration";
import Profile from "../Profile/Profile";
import { Login } from "../Auth/Login";
import { sendCartData } from "../../store/basket-action";
import { basketActions } from "../../store/basket-slice";

let isInitial = true;

const MainPage = () => {
  const dispatch = useDispatch();
  const basketChanged = useSelector((state) => state.basket.basketChanged);
  const items = useSelector((state) => state.basket.items);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJjbGllbnQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiOTMzMjM2NDk1NSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6ImU0ODRjZmMxLTFmMDAtNDIzNC1iYWNhLTBjYmRjYTlhYmJjMiIsImp0aSI6IjNiYTkyNzgwLWUxYzQtNDliYS05NzExLWVlMGQwZjhiOWY4YSIsImV4cCI6MTY5NjkxNzAzNywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDU4LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTA1OC8ifQ.k_sWj-wKfVhXl8S-gvnc6vOSnqovtRStmgS6nz-TowA";
  useEffect(() => {
    dispatch(fetchListOfCatalogs());
    dispatch(sendCartData(items, token));
  }, [dispatch]);
  // prevent footer component shows in login and signin pages
  const location = useLocation();
  const excludeFooterRoutes = ["/login", "/signup"];
  const shouldShowFooter = !excludeFooterRoutes.includes(location.pathname);

  useEffect(() => {
    if (basketChanged) {
      const timer = setTimeout(() => {
        dispatch(sendCartData(items, token));
        dispatch(basketActions.toggleBasketChanges(false));
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
    console.log("basketchanged");
  }, [basketChanged, dispatch, items, token]);

  return (
    <div className="page-home">
      <div className="page-wrapper">
        <main className="page-main">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home-page" />
            </Route>
            <Route path="/home-page" exact>
              <HomePage />
            </Route>
            <Route path="/catalog" exact>
              <MainEventsPage />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/service-details" exact>
              <SinglePage />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Registration />
            </Route>
            <Route path="*">
              <Redirect to="/home-page" />
            </Route>
          </Switch>
          {shouldShowFooter && <Footer />}
        </main>
      </div>
    </div>
  );
};

export default MainPage;
