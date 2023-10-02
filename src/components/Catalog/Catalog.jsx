import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "./CatalogItem";
const Catalog = () => {
  const listOfCatalogs = useSelector((state) => state.catalog.catalogsList);
  return (
    <div class="c-scroll-container">
      <div class="c-scroll-container-width">
        <div class="uk-container uk-container-xlarge c-scroll">
          {listOfCatalogs.map((item) => (
            <CatalogItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
