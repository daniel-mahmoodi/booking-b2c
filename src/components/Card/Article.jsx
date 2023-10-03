import React from "react";
import Comment from "./Comment";
import RelatedServices from "./RelatedServices";

function Article({ data }) {
  return (
    <article className="article-full">
      <div className="article-full__head">
        <h3 className="article-full__title">{`${data.eventName}: ${data.serviceName}`}</h3>
      </div>
      <div className="article-full__image shine" data-uk-lightbox>
        <a href="assets/img/img-article-full-1.jpg">
          <img src="assets/img/img-article-full-1.jpg" alt="img-article" />
        </a>
      </div>
      <div
        className="uk-margin-medium-top article-full__content"
        style={{ textAlign: "justify", fontSize: "14px" }}
      >
        <h3>توضیحات سرویس :</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سابا هدف بهبود ابز جامعه و متخصصان را
        </p>
        <p>{data.serviceDescription}</p>
        <div
          className="uk-grid uk-grid-medium uk-child-width-1-2@s uk-margin-medium"
          data-uk-grid
          data-uk-lightbox
        >
          <div>
            <a className="shine" href="./assets/img/img-article-gallery-1.jpg">
              <img
                className="uk-border-rounded uk-width-1-1"
                src="./assets/img/img-article-gallery-1.jpg"
                alt="gallery"
              />
            </a>
          </div>
          <div>
            <a className="shine" href="./assets/img/img-article-gallery-2.jpg">
              <img
                className="uk-border-rounded uk-width-1-1"
                src="./assets/img/img-article-gallery-2.jpg"
                alt="gallery"
              />
            </a>
          </div>
        </div>
        <h3>آدرس:</h3>
        <p>{data.address} </p>
        <h3>شماره تماس:</h3>
        <p>{data.phoneNumber} </p>
        <blockquote>
          <p>
            لورم ایپسوم متن ساختگی با تولگرافیک است، چاپگرها و متون بلکه روزنامه
            و مجله
          </p>
          <div className="user">
            <strong>لورم ایپسوم متن </strong>
            <span>لورم ایپسوم </span>
          </div>
        </blockquote>
        <p>لورم ایپسوم متن ساختگی با</p>
      </div>
      <div className="article-full__bottom" id="article-bottom">
        <div className="article-full__tags">
          <ul className="tags-list">
            <li>
              <a href="#!"> ایپسوم </a>
            </li>
            <li>
              <a href="#!">لورم ایپسوم متن </a>
            </li>
            <li>
              <a href="#!">لورم ایپسوم </a>
            </li>
          </ul>
        </div>
        <div className="article-full__share">
          <a className="share-link" href="#!">
            <i className="icon-share"></i>
            <span>اشتراک گذاری</span>
          </a>
        </div>
      </div>
    
      <RelatedServices />
      <Comment />
    </article>
  );
}

export default Article;
