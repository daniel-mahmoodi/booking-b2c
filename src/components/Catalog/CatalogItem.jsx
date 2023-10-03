import React from "react";
import { useDispatch } from "react-redux";
import { catalogActions } from "../../store/catalog-slice";
import { useHistory } from "react-router-dom";
import { fetchCatalogDetails } from "../../store/catalog-action";

const CatalogItem = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const catalogSelectedHandler = () => {
    dispatch(catalogActions.addSelectedCatalogName(data.catalogName));
    dispatch(fetchCatalogDetails(data.id));
    history.push("/catalog");
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
