import React from "react";

const SpecialOffers = () => {
  return (
    <div className="widjet widjet-list-articles">
      <h4 className="widjet__title" style={{ fontSize: "14px" }}>
        پیشنهاد های ویژه
      </h4>
      <ul className="list-articles">
        <li className="list-articles-item">
          <a className="list-articles-item__link">
            <div className="list-articles-item__img shine">
              <img
                src="./assets/img/img-article-thumb-1.jpg"
                alt="article-thumb"
              />
            </div>
            <div className="list-articles-item__info">
              <div
                className="list-articles-item__title"
                style={{ fontSize: "14px" }}
              >
                لورم ایپسوم متن ساختگی با
              </div>
              <div className="list-articles-item__category">
                <div>
                  <span
                    style={{
                      color: "red",
                      textDecoration: "line-through red",
                    }}
                  >
                    ۱۲,۰۰۰ تومان
                  </span>
                  <br />
                  <span style={{ color: "green" }}>۱۲,۰۰۰ تومان</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li className="list-articles-item">
          {/* Repeat similar code for other list items */}
        </li>
      </ul>
    </div>
  );
};

export default SpecialOffers;
