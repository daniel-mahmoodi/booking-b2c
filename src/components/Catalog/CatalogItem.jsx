import React from "react";
import { useDispatch } from "react-redux";
import { catalogActions } from "../../store/catalog-slice";
import { useHistory } from "react-router-dom";
import { fetchCatalogDetails } from "../../store/catalog-action";
const IMGUrl = "https://takish724.ir/";
const CatalogItem = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const catalogSelectedHandler = () => {
    dispatch(catalogActions.addSelectedCatalogName(data.catalogName));
    dispatch(fetchCatalogDetails(data.id));
    history.push("/catalog");
  };
  return (
    <div
      onClick={catalogSelectedHandler}
      className="item btn"
      style={{ padding: "1px" }}
    >
      <div className="shine svg-container">
        <img src={`${IMGUrl}${data.imageUrl.replace("..", "")}`} alt="" />
        <span>{data.catalogName}</span>
      </div>
    </div>
  );
};

export default CatalogItem;
