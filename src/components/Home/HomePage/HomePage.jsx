import React, { Fragment } from "react";
import Slider from "../Banners/Slider/Slider";
import FirstSectionBanner from "../Banners/Sections/FirstSection/FirstSectionBanner";
import SecondSectionBanner from "../Banners/Sections/SecondSection/SecondSectionBanner";
import SectionPapular from "../Banners/Sections/SectionPapular";
import SectionFeatured from "../Banners/Sections/SectionFeatured";
import HomeBanner from "./HomeBanner";
import Catalog from "../../Catalog/Main/Catalog";
import HomePageCatalog from "../../Catalog/Main/HomePageCatalog";

const HomePage = () => {
  return (
    <Fragment>
      {/* <Slider /> */}
      <HomeBanner />
      <div style={{ marginBottom: "10rem" }}>
        <HomePageCatalog />
      </div>
      {/* <Catalog /> */}
      <FirstSectionBanner />
      <SectionPapular />
      {/* <SectionFeatured /> */}
      <SecondSectionBanner />
    </Fragment>
  );
};

export default HomePage;
