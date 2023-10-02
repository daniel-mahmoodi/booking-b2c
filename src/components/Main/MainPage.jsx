import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MainEventsPage from "../Events/MainEventsPage";
import { useDispatch } from "react-redux";
import { fetchListOfCatalogs } from "../../store/catalog-action";
import HomePage from "../Home/HomePage/HomePage";
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
            <Route path="/home-page/catalog/:catalogId" exact>
              <MainEventsPage />
            </Route>
          </Switch>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainPage;
