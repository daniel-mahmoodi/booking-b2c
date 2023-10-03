import React, { Fragment } from "react";
import Banner from "./Banner/Banner";
import Filter from "./Filter/Filter";
import Events from "./Events";
import { useSelector } from "react-redux";

const MainEventsPage = () => {
  const catalogDetails = useSelector((state) => state.catalog.catalogDetails);

  return (
    <Fragment>
      <Banner />
      <div className="page-content bg-body-tertiary">
        <Filter data={catalogDetails} />
        <Events />
      </div>
    </Fragment>
  );
};

export default MainEventsPage;