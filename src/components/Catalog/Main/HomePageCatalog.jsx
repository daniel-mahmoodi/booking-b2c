import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "../Items/CatalogItem";
import MyCatalogLoader from "../../Layout/MyCategoryLoader";
import { useHistory } from "react-router-dom";
import classes from "./HomePageCatalog.module.css";

const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const HomePageCatalog = () => {
  const history = useHistory();
  const listOfCatalogs = useSelector((state) => state.catalog.listOfCatalogs);
  const myCatalogLoader = useSelector((state) => state.catalog.myCatalogLoader);
  const showCatalogError = useSelector(
    (state) => state.catalog.showCatalogError
  );
  const catalogSelectedHandler = () => {
    history.push("/cars");
  };
  return (
    <div className={classes.container}>
      <div className={classes.containerWidth}>
        {!myCatalogLoader ? (
          <div className={classes.items}>
            {showCatalogError ? (
              <p className="text-red">
                {"مشکل در دریافت اطلاعات. لطفا دوباره اقدام کنید."}
              </p>
            ) : (
              <>
                {listOfCatalogs.map((item) => (
                  <CatalogItem key={item.id} data={item} />
                ))}
                {/* <CatalogItem data={{catalogName:'اجاره مشاین',imageUrl:'../assets/img/header/69094852car.svg'}} /> */}
                <div onClick={catalogSelectedHandler} className={classes.item}>
                  <img
                    src={`${IMGUrl}/Upload/IMGService/header/69094852car.svg`}
                    alt=""
                  />
                  <div className={classes.itemTitle}>اجاره ماشین</div>
                </div>
              </>
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

export default HomePageCatalog;
