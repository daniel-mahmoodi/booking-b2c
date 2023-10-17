import React from "react";
import Comment from "../Comment";
import RelatedServices from "../RelatedServices";
import ArticleHeaderImage from "./ArticleHeaderImage";
import ArticleDescription from "./ArticleDescription";
import ArticleTags from "./ArticleTags";

function Article({ data }) {
  return (
    <article className="article-full">
      <div className="article-full__head">
        <h3 className="article-full__title">{`${data.eventName}: ${data.serviceName}`}</h3>
      </div>
      <ArticleHeaderImage image={data.imageUrl} />
      <ArticleDescription data={data} />
      {/* <ArticleTags/> */}
      {/* <RelatedServices /> */}
      {/* <Comment /> */}
    </article>
  );
}

export default Article;
