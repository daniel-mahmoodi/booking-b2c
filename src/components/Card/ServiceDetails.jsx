import React from "react";
import { useSelector } from "react-redux";
import Article from "./Article/Article";
import LeftSidebar from "./LeftSidebar";
import Banner from "../Events/Banner/Banner";
import PricingNotificationBar from "../Order/PricingNotificationBar";

const ServiceDetails = () => {
  const serviceDetails = useSelector((state) => state.event.serviceDetails);

  return (
    <main className="page-main">
      <Banner
        selectedCatalogName={serviceDetails.eventName}
        titleName={"صفحه نخست"}
      />
      <div className="page-content">
        <div className="uk-section-large uk-container">
          <div className="uk-grid uk-grid-medium" data-uk-grid>
            <div className="uk-width-2-3@m">
              {Object.keys(serviceDetails).length && (
                <Article data={serviceDetails} />
              )}
            </div>
            <LeftSidebar price={serviceDetails.price} id={serviceDetails.id} />
          </div>
        </div>
      </div>
      <PricingNotificationBar
        price={serviceDetails.price}
        id={serviceDetails.id}
      />
    </main>
  );
};

export default ServiceDetails;
