import React from "react";

function RelatedServices() {
  return (
    <div className="section-related-article">
      <div className="uk-h2" style={{ fontFamily: "iransans" }}>
        <span className="icon-folder"></span>خدمات مرتبط
      </div>
      <div data-uk-slider style={{ direction: "ltr" }}>
        <div className="uk-position-relative" tabIndex="-1">
          <ul className="uk-slider-items uk-grid uk-grid-medium uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m">
            <li>
              <div style={{ direction: "rtl" }}>
                <div
                  className="blog-card"
                  style={{
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="blog-card__box">
                    <div
                      className="blog-card__media shine"
                      style={{ marginBottom: "10px" }}
                    >
                      <a href="#">
                        <img
                          src="assets/img/blog-thumb-1.jpg"
                          alt="لورم ایپسوم متن ساختگی"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="blog-card__body">
                      <div
                        className="blog-card__title"
                        style={{ textAlign: "right" }}
                      >
                        <a href="#" style={{ fontSize: "18px" }}>
                          لورم ایپسوم متن ساختگی با
                        </a>
                      </div>
                      <div className="blog-card__intro">
                        <p style={{ textAlign: "justify", fontSize: "14px" }}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از
                        </p>
                      </div>
                      <div
                        className="listing-card__location"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span>۱۲۷.۰۰۰.۰۰۰ تومان</span>
                      </div>
                      <div
                        className="blog-card__more"
                        style={{ textAlign: "center", paddingBottom: "15px" }}
                      >
                        <a className="uk-button uk-button-default" href="#">
                          ثبت سفارش
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div style={{ direction: "rtl" }}>
                <div
                  className="blog-card"
                  style={{
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="blog-card__box">
                    <div
                      className="blog-card__media shine"
                      style={{ marginBottom: "10px" }}
                    >
                      <a href="#">
                        <img
                          src="assets/img/blog-thumb-1.jpg"
                          alt="لورم ایپسوم متن ساختگی"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="blog-card__body">
                      <div
                        className="blog-card__title"
                        style={{ textAlign: "right" }}
                      >
                        <a href="#" style={{ fontSize: "18px" }}>
                          لورم ایپسوم متن ساختگی با
                        </a>
                      </div>
                      <div className="blog-card__intro">
                        <p style={{ textAlign: "justify", fontSize: "14px" }}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از
                        </p>
                      </div>
                      <div
                        className="listing-card__location"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span>۱۲۷.۰۰۰.۰۰۰ تومان</span>
                      </div>
                      <div
                        className="blog-card__more"
                        style={{ textAlign: "center", paddingBottom: "15px" }}
                      >
                        <a className="uk-button uk-button-default" href="#">
                          ثبت سفارش
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div style={{ direction: "rtl" }}>
                <div
                  className="blog-card"
                  style={{
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    borderRadius: "10px",
                  }}
                >
                  <div className="blog-card__box">
                    <div
                      className="blog-card__media shine"
                      style={{ marginBottom: "10px" }}
                    >
                      <a href="#">
                        <img
                          src="assets/img/blog-thumb-1.jpg"
                          alt="لورم ایپسوم متن ساختگی"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                    <div className="blog-card__body">
                      <div
                        className="blog-card__title"
                        style={{ textAlign: "right" }}
                      >
                        <a href="#" style={{ fontSize: "18px" }}>
                          لورم ایپسوم متن ساختگی با
                        </a>
                      </div>
                      <div className="blog-card__intro">
                        <p style={{ textAlign: "justify", fontSize: "14px" }}>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از
                        </p>
                      </div>
                      <div
                        className="listing-card__location"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span>۱۲۷.۰۰۰.۰۰۰ تومان</span>
                      </div>
                      <div
                        className="blog-card__more"
                        style={{ textAlign: "center", paddingBottom: "15px" }}
                      >
                        <a className="uk-button uk-button-default" href="#">
                          ثبت سفارش
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top"></ul>
      </div>
    </div>
  );
}

export default RelatedServices;
