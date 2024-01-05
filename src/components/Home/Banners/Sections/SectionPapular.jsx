import React from "react";
import { useGetWPData } from "../../../Hook/useGetWPData";

function SectionPopular({ data, media }) {

  return (
    <div className="section-popular" dir="rtl">
      <div className="uk-container uk-margin-large-bottom">
        <div className="section-title uk-text-center">
          <span>دیدنی ترین مقصد های کیش</span>
          <h3 className="uk-h3">پر جاذبه ترین مکان ها</h3>
        </div>
        <div className="section-content container">
          <div className="uk-child-width-1-2@l uk-grid-medium row" uk-grid>
            <div className="col-6">
              <div className="city-item">
                <a className="city-item__box" href="03_city-listings.html">
                  <div className="uk-cover-container uk-height-medium uk-border-rounded">
                    <img
                      className="city-item__img object-fit-cover"
                      style={{ width: "100%", height: "100%" }}
                      src={media}
                      alt="مکان یک"
                      data-uk-cover="data-uk-cover"
                    />
                    <div className="uk-overlay-primary uk-position-cover"></div>
                    <div className="city-item__content uk-position-bottom">
                      <div className="city-item__city">
                        {data.title.rendered}
                      </div>
                      {/* <div className="city-item__country">توضیحات مکان یک</div> */}
                    </div>
                    <div className="uk-position-top-right">
                      <div className="city-item__col">۲۰ بار لیست شده</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* <div> */}
            {/* <div className="uk-child-width-1-2@s uk-grid-medium" uk-grid> */}
            <div className="col">
              <div className="city-item">
                <a className="city-item__box" href="03_city-listings.html">
                  <div className="uk-cover-container uk-height-medium uk-border-rounded">
                    <img
                      className="city-item__img"
                      style={{ width: "100%", height: "100%" }}
                      src="/assets/img/img-city-2.jpg"
                      alt="Paris"
                      data-uk-cover="data-uk-cover"
                    />
                    <div className="uk-overlay-primary uk-position-cover"></div>
                    <div className="city-item__content uk-position-bottom">
                      <div className="city-item__city">مکان دو</div>
                      <div className="city-item__country">توضیحات مکان دو</div>
                    </div>
                    <div className="uk-position-top-right">
                      <div className="city-item__col">۲۰ بار لیست شده</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="city-item">
                <a className="city-item__box" href="03_city-listings.html">
                  <div className="uk-cover-container uk-height-medium uk-border-rounded">
                    <img
                      className="city-item__img"
                      style={{ width: "100%", height: "100%" }}
                      src="/assets/img/img-city-3.jpg"
                      alt="London"
                      data-uk-cover="data-uk-cover"
                    />
                    <div className="uk-overlay-primary uk-position-cover"></div>
                    <div className="city-item__content uk-position-bottom">
                      <div className="city-item__city">مکان سه</div>
                      <div className="city-item__country">توضیحات مکان سه</div>
                    </div>
                    <div className="uk-position-top-right">
                      <div className="city-item__col">۲۰ بار لیست شده</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
          {/* <div className="uk-child-width-1-2@l uk-grid-medium" uk-grid> */}
          {/* <div> */}
          <div className="uk-child-width-1-2@s uk-grid-medium row my-4" uk-grid>
            <div className="col">
              <div className="city-item">
                <a className="city-item__box" href="03_city-listings.html">
                  <div className="uk-cover-container uk-height-medium uk-border-rounded ">
                    <img
                      className="city-item__img"
                      style={{ width: "100%", height: "100%" }}
                      src="/assets/img/img-city-4.jpg"
                      alt="Bangkok"
                      data-uk-cover="data-uk-cover"
                    />
                    <div className="uk-overlay-primary uk-position-cover"></div>
                    <div className="city-item__content uk-position-bottom">
                      <div className="city-item__city">مکان چهار</div>
                      <div className="city-item__country">
                        توضیحات مکان چهار
                      </div>
                    </div>
                    <div className="uk-position-top-right">
                      <div className="city-item__col">۲۰ بار لیست شده</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="city-item">
                <a className="city-item__box" href="03_city-listings.html">
                  <div className="uk-cover-container uk-height-medium uk-border-rounded">
                    <img
                      className="city-item__img"
                      style={{ width: "100%", height: "100%" }}
                      src="/assets/img/img-city-5.jpg"
                      alt="Dubai"
                      data-uk-cover="data-uk-cover"
                    />
                    <div className="uk-overlay-primary uk-position-cover"></div>
                    <div className="city-item__content uk-position-bottom">
                      <div className="city-item__city">مکان ۵</div>
                      <div className="city-item__country">توضیحات مکان ۵</div>
                    </div>
                    <div className="uk-position-top-right">
                      <div className="city-item__col">۲۰ بار لیست شده</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
            <div className="col">
              <div className="city-item">
                <a className="city-item__box" href="03_city-listings.html">
                  <div className="uk-cover-container uk-height-medium uk-border-rounded">
                    <img
                      className="city-item__img"
                      style={{ width: "100%", height: "100%" }}
                      src="/assets/img/img-city-6.jpg"
                      alt="Singapore"
                      data-uk-cover="data-uk-cover"
                    />
                    <div className="uk-overlay-primary uk-position-cover"></div>
                    <div className="city-item__content uk-position-bottom">
                      <div className="city-item__city">مکان ۶</div>
                      <div className="city-item__country">توضیحات مکان ۶</div>
                    </div>
                    <div className="uk-position-top-right">
                      <div className="city-item__col">۲۰ بار لیست شده</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionPopular;
