import React from "react";
import { useDispatch } from "react-redux";
import { catalogActions } from "../../../store/catalog-slice";
import { useHistory } from "react-router-dom";
import { fetchCatalogDetails } from "../../../store/catalog-action";
import classes from "./../Main/HomePageCatalog.module.css";
const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const CatalogItem = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const catalogSelectedHandler = () => {
    dispatch(catalogActions.addSelectedCatalogName(data.catalogName));
    dispatch(fetchCatalogDetails(data.id));
    history.push("/catalog");
  };
  return (
    <div onClick={catalogSelectedHandler} className={classes.item}>
      <img src={`${IMGUrl}${data.imageUrl.replace("..", "")}`} alt="" />
      <div className={classes.itemTitle}>{data.catalogName}</div>
    </div>
  );
};

export default CatalogItem;
