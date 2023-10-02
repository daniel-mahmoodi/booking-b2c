import React, { Fragment, useEffect } from "react";
import Banner from "./Banner/Banner";
import Filter from "./Filter";
import Events from "./Events";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchChildrenOfCatalog } from "../../store/catalog-action";

const MainEventsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const cildrenOfCatalog = useSelector(
    (state) => state.catalog.childrenOfCatalog
  );
  console.log("childrenOfCatalog", cildrenOfCatalog);
  useEffect(() => {
    dispatch(fetchChildrenOfCatalog(params.catalogId));
    
  }, [dispatch, params.catalogId]);

  return (
    <Fragment>
      <Banner />
      <div className="page-content bg-body-tertiary">
        <Filter data={cildrenOfCatalog} />
        <Events />
      </div>
    </Fragment>
  );
};

export default MainEventsPage;
