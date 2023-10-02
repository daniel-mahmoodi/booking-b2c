import React from "react";
import FooterDescriptions from "./FooterDescriptions";
import AppDownload from "./AppDownload";
import FooterImportanLinks from "./FooterImportanLinks";

const TopFooter = () => {
  return (
    <div className="page-footer__top">
      <div className="uk-container">
        <div className="uk-grid" data-uk-grid>
          <FooterDescriptions />
          <AppDownload />
          <FooterImportanLinks />
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
