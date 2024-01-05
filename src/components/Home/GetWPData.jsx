import React, { useState, useEffect } from "react";
import { useGetWPData } from "../Hook/useGetWPData";
import BlogBannerData from "./Banners/blog/BlogBannerData";
import MyCatalogLoader from "../Layout/MyCategoryLoader";
const GetWPData = ({ category }) => {
  const { data, media, loading } = useGetWPData(category);

  if (loading) {
    return <MyCatalogLoader />;
  }
  return (
    <div>
      <BlogBannerData data={data} media={media} />
    </div>
  );
};

export default GetWPData;
