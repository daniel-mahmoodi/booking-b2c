import React from "react";
import { useSelector } from "react-redux";
import CatalogItem from "./CatalogItem";
import MyCatalogLoader from "../Layout/MyCategoryLoader";
import { useHistory } from "react-router-dom";

const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const Catalog = () => {
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
    <div className="c-scroll-container">
      <div className="c-scroll-container-width">
        {!myCatalogLoader ? (
          <div className="uk-container uk-container-xlarge c-scroll">
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
                <div
                  onClick={catalogSelectedHandler}
                  className="item btn"
                  style={{ padding: "1px" }}
                >
                  <div className="shine svg-container">
                    <img
                      src={`${IMGUrl}/Upload/IMGService/header/69094852car.svg`}
                      alt=""
                    />
                    <span>اجاره ماشین</span>
                  </div>
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

export default Catalog;
