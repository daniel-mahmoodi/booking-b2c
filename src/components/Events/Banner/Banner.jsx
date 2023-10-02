import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Banner.module.css";
import { useSelector } from "react-redux";
function Banner() {
  const selectedCatalogName = useSelector(
    (state) => state.catalog.selectedCatalogName
  );
  return (
    <div className="section-banner">
      <div
        className="section-banner__bg"
        style={{ backgroundImage: "url(assets/img/bg-banner-blog-grid.jpg)" }}
      >
        <div className="uk-container d-flex">
          <div className="section-banner__content">
            <div className="section-banner__breadcrumb">
              <ul
                className="uk-breadcrumb"
                style={{ direction: "rtl", fontWeight: 300 }}
              >
                <li>
                  <Link to="/" className={classes.breadcrumb}>
                    صفحه نخست
                  </Link>
                </li>
                {/* <li><span>عکاسی</span></li> */}
              </ul>
            </div>
            <div className="section-banner__title">{selectedCatalogName}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
