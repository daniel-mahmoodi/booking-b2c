import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "./CatalogItem";
import MyCatalogLoader from "../Layout/MyCategoryLoader";
const Catalog = () => {
 
  const listOfCatalogs = useSelector((state) => state.catalog.listOfCatalogs);
  const myCatalogLoader = useSelector((state) => state.catalog.myCatalogLoader);
  const showCatalogError = useSelector(
    (state) => state.catalog.showCatalogError
  );
  return (
    <div className="c-scroll-container">
      <div className="c-scroll-container-width">
        {!myCatalogLoader ? (
          <div className="uk-container uk-container-xlarge c-scroll">
            {showCatalogError ? (
              <p className="text-red">
                {"مشکل در دریافت اطلاعات. لطفا دوباره اقدام کنید."}
              </p>
            ) : (
              listOfCatalogs.map((item) => (
                <CatalogItem key={item.id} data={item} />
              ))
            )}
          </div>
        ) : (
          <div className="py-2">
            <MyCatalogLoader />
            <MyCatalogLoader />
            <MyCatalogLoader />
            <MyCatalogLoader />
            <MyCatalogLoader />
            <MyCatalogLoader />
            <MyCatalogLoader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
