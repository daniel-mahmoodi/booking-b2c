import React from "react";
import { useDispatch } from "react-redux";
import { catalogActions } from "../../store/catalog-slice";

const CatalogItem = ({ data }) => {
  const dispatch = useDispatch();
  const catalogSelectedHandler = () => {
    dispatch(catalogActions.addSelectedCatalogName(data.catalogName));
  };
  return (
    <div onClick={catalogSelectedHandler} className="item btn">
      <div className="shine svg-container">
        <img src={data.imageUrl} alt="" />
        <span>{data.catalogName}</span>
      </div>
    </div>
  );
};

export default CatalogItem;
