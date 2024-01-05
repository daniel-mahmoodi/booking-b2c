import React from "react";
import classes from "./BlogBannerData.module.css";

const BlogBannerData = ({ data, media }) => {
  if (!Object.keys(data).length) {
    return;
  }
  return (
    <a href={data.link} className={classes.body}>
      {/* <div className={classes.container}> */}
        <div className={classes.inlineBorder}>
          <p className={classes.title}>{data.title.rendered}</p>
          <button>اطلاعات بیشتر</button>
        </div>
        {media.length !== 0 && <img src={media} alt={data.title.rendered} />}
      {/* </div> */}
    </a>
  );
};

export default BlogBannerData;
