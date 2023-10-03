import React from "react";
import FilterItem from "./FilterItem";
import MyCatalogLoader from "../../Layout/MyCategoryLoader";
import { useSelector } from "react-redux";

function Filter({ data }) {
  const myCatalogDetailsLoader = useSelector(
    (state) => state.catalog.myCatalogDetailsLoader
  );
  const showCatalogDetailsError = useSelector(
    (state) => state.catalog.showCatalogDetailsError
  );
  console.log("filter", myCatalogDetailsLoader, showCatalogDetailsError);
  return (
    <div className="uk-container" style={{ padding: "30px 0" }}>
      {!showCatalogDetailsError && (
        <p className="d-flex px-4" style={{ fontWeight: 500 }}>
          جستجو بر اساس:
        </p>
      )}
      <div>
        <ul className="filter-list">
          {!myCatalogDetailsLoader ? (
            data.map((item) => <FilterItem key={item.id} data={item} />)
          ) : (
            <li className="px-2">
              <MyCatalogLoader />
              <MyCatalogLoader />
              <MyCatalogLoader />
            </li>
          )}
          {showCatalogDetailsError && (
            <button className="d-flex p-2 border-0 bg-transparent text-red">
              هیچ اطلاعاتی یافت نشد.
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
