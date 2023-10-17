import React from "react";
const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const ArticleHeaderImage = ({ image }) => {
  return (
    <div
      className="article-full__image shine"
      style={{ borderRadius: "6px" }}
      data-uk-lightbox
    >
      <a>
        <img src={`${IMGUrl}${image.replace("..", "")}`} alt="img-article" />
      </a>
    </div>
  );
};

export default ArticleHeaderImage;
