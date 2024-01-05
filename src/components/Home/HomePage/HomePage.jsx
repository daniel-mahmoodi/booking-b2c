import React, { Fragment } from "react";
import Slider from "../Banners/Slider/Slider";
import FirstSectionBanner from "../Banners/Sections/FirstSection/FirstSectionBanner";
import SecondSectionBanner from "../Banners/Sections/SecondSection/SecondSectionBanner";
import SectionPapular from "../Banners/Sections/SectionPapular";
import SectionFeatured from "../Banners/Sections/SectionFeatured";
import HomeBanner from "./HomeBanner";
import Catalog from "../../Catalog/Main/Catalog";
import HomePageCatalog from "../../Catalog/Main/HomePageCatalog";
import GetWPData from "../GetWPData";
import { useGetWPData } from "../../Hook/useGetWPData";

const HomePage = () => {
  const { data, media, loading } = useGetWPData(22);
  console.log("data, media, loading", data, media, loading);
  return (
    <Fragment>
      {/* <Slider /> */}
      <HomeBanner />

      <div style={{ marginBottom: "10rem" }}>
        <HomePageCatalog />
      </div>
      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GetWPData category={22} />
          <GetWPData category={36} />
        </div>
      </div>

      {/* <Catalog /> */}
      {/* <FirstSectionBanner /> */}
      {!loading
        ? Object.keys(data).length && (
            <SectionPapular data={data} media={media} />
          )
        : ""}
      {/* <SectionFeatured /> */}
    
      <SecondSectionBanner />
    </Fragment>
  );
};

export default HomePage;
