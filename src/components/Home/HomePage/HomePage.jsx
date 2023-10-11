import React, { Fragment } from "react";
import Slider from "../Banners/Slider/Slider";
import FirstSectionBanner from "../Banners/Sections/FirstSection/FirstSectionBanner";
import SecondSectionBanner from "../Banners/Sections/SecondSection/SecondSectionBanner";
import SectionPapular from "../Banners/Sections/SectionPapular";
import SectionFeatured from "../Banners/Sections/SectionFeatured";


const HomePage = () => {
  return (
    <Fragment>
      <Slider />
      <FirstSectionBanner />
      <SectionPapular />
      {/* <SectionFeatured /> */}
      <SecondSectionBanner />
    </Fragment>
  );
};

export default HomePage;
