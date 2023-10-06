import React from "react";
import { useSelector } from "react-redux";
import Article from "./Article";
import LeftSidebar from "./LeftSidebar";
import Banner from "../Events/Banner/Banner";
import PricingNotificationBar from "../Order/PricingNotificationBar";

const SinglePage = () => {
  const serviceDetails = useSelector((state) => state.event.serviceDetails);
  console.log("serviceDetails", serviceDetails);
  return (
    <main className="page-main">
      <Banner />
      <div className="page-content">
        <div className="uk-section-large uk-container">
          <div className="uk-grid uk-grid-medium" data-uk-grid>
            <div className="uk-width-2-3@m">
              {Object.keys(serviceDetails).length && <Article data={serviceDetails} />}
            </div>
            <LeftSidebar />
          </div>
        </div>
      </div>
      <PricingNotificationBar />
    </main>
  );
};

export default SinglePage;
