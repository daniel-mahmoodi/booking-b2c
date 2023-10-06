import React from "react";

function SectionFeatured() {
  return (
    <div className="section-featured">
      <div className="uk-background-muted">
        <div className="uk-section-large uk-container uk-container-expand">
          <div className="section-title uk-text-center">
            <span>پیشنهادات ویژه</span>
            <h3 className="uk-h3">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
            </h3>
          </div>
          <div className="section-content">
            <div data-uk-slider="sets: true" uk-slider="autoplay: true">
              <div className="uk-position-relative" tabIndex="-1">
                <div className="uk-slider-container">
                  <ul className="uk-slider-items uk-grid uk-grid-medium uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-child-width-1-5@xl">
                    {/* Repeat this li section for each item */}
                    <li>
                      <div
                        className="listing-card"
                        style={{ direction: "rtl", textAlign: "right" }}
                      >
                        <div className="listing-card__box">
                          <div className="listing-card__media shine">
                            <a>
                              <img
                                src="assets/img/offer/1.jpeg"
                                alt="لورم ایپسوم"
                              />
                            </a>
                            <div className="listing-card__type off-price-archive">
                              ۲۲٪ تخفیف
                            </div>
                          </div>
                          <div
                            className="listing-card__body"
                            style={{ padding: "10px 10px" }}
                          >
                            <div className="listing-card__title">
                              <a style={{ fontSize: "18px" }}>
                                لورم ایپسوم متن ساختگی
                              </a>
                            </div>
                            <div
                              className="listing-card__intro"
                              style={{ fontSize: "14px" }}
                            >
                              لورم ایپسوم متن ساختگی با
                            </div>
                            <div
                              className="listing-card__location"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <span className="main-price">۱۲۷.۰۰۰ تومان</span>
                              <span className="off-price">۱۲۷.۰۰۰ تومان</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className="listing-card"
                        style={{ direction: "rtl", textAlign: "right" }}
                      >
                        <div className="listing-card__box">
                          <div className="listing-card__media shine">
                            <a>
                              <img
                                src="assets/img/offer/1.jpeg"
                                alt="لورم ایپسوم"
                              />
                            </a>
                            <div className="listing-card__type off-price-archive">
                              ۲۲٪ تخفیف
                            </div>
                          </div>
                          <div
                            className="listing-card__body"
                            style={{ padding: "10px 10px" }}
                          >
                            <div className="listing-card__title">
                              <a style={{ fontSize: "18px" }}>
                                لورم ایپسوم متن ساختگی
                              </a>
                            </div>
                            <div
                              className="listing-card__intro"
                              style={{ fontSize: "14px" }}
                            >
                              لورم ایپسوم متن ساختگی با
                            </div>
                            <div
                              className="listing-card__location"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <span className="main-price">۱۲۷.۰۰۰ تومان</span>
                              <span className="off-price">۱۲۷.۰۰۰ تومان</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Repeat this li section for each item */}
                  </ul>
                  <a
                    className="uk-position-top-left uk-icon uk-slidenav-previous uk-slidenav"
                    data-uk-slidenav-previous=""
                    data-uk-slider-item="previous"
                  >
                    <svg
                      width="14px"
                      height="24px"
                      viewBox="0 0 14 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="slidenav-previous"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.4"
                        points="12.775,1 1.225,12 12.775,23"
                      ></polyline>
                    </svg>
                  </a>
                  <a
                    className="uk-position-top-right uk-icon uk-slidenav-next uk-slidenav"
                    data-uk-slidenav-next=""
                    data-uk-slider-item="next"
                  >
                    <svg
                      width="14px"
                      height="24px"
                      viewBox="0 0 14 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="slidenav-next"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.4"
                        points="1.225,23 12.775,12 1.225,1"
                      ></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFeatured;
