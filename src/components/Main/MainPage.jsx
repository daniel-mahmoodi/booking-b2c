import React from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const MainPage = () => {
  return (
    <div>
      <Switch>
          <Navbar/>
        <Route path="/" exact>
          <Redirect to="/home-page" />
        </Route>
        <Route path="/home-page" exact>
          {/* <Home /> */}
        </Route>
        <Route path="/buying-tickets" exact>
          {/* <BuyingTickets /> */}
        </Route>
      </Switch>
    </div>
  );
};

export default MainPage;
