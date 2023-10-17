import React from "react";
import BlockQuote from "./BlockQuote";
const ArticleDescription = ({ data }) => {
  return (
    <div
      className="uk-margin-medium-top article-full__content"
      style={{ textAlign: "justify", fontSize: "14px" }}
    >
      <h3>توضیحات سرویس :</h3>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.serviceDescription,
          }}
        />
      </div>
      {/* <div
          className="uk-grid uk-grid-medium uk-child-width-1-2@s uk-margin-medium"
          data-uk-grid
          data-uk-lightbox
        >
          <div>
            <a className="shine" >
              <img
                className="uk-border-rounded uk-width-1-1"
                src="./assets/img/img-article-gallery-1.jpg"
                alt="gallery"
              />
            </a>
          </div>
          <div>
            <a className="shine">
              <img
                className="uk-border-rounded uk-width-1-1"
                src={`${IMGUrl}${data.imageUrl.replace("..", "")}`}
                alt="gallery"
              />
            </a>
          </div>
        </div> */}
      <h3>آدرس:</h3>
      <p>{data.address} </p>
      <h3>شماره تماس:</h3>
      <p>{data.phoneNumber} </p>
      {/* <BlockQuote /> */}
      {/* <p>لورم ایپسوم متن ساختگی با</p> */}
    </div>
  );
};

export default ArticleDescription;
