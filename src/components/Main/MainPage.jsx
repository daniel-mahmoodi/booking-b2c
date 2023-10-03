import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MainEventsPage from "../Events/MainEventsPage";
import { useDispatch } from "react-redux";
import { fetchListOfCatalogs } from "../../store/catalog-action";
import HomePage from "../Home/HomePage/HomePage";
import SinglePage from "../Card/SinglePage";
const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListOfCatalogs());
  }, [dispatch]);

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
            <Route path="*">
              <Redirect to="/home-page" />
            </Route>
          </Switch>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainPage;
