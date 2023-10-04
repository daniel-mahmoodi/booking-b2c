import React, { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MainEventsPage from "../Events/MainEventsPage";
import { useDispatch } from "react-redux";
import { fetchListOfCatalogs } from "../../store/catalog-action";
import HomePage from "../Home/HomePage/HomePage";
import SinglePage from "../Card/SinglePage";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListOfCatalogs());
  }, [dispatch]);
  // prevent footer component shows in login and signin pages
  const location = useLocation();
  const excludeFooterRoutes = ["/login", "/signup"];
  const shouldShowFooter = !excludeFooterRoutes.includes(location.pathname);

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
            <Route path="/single-page" exact>
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
