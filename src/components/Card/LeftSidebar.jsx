import React from "react";
import ProductFeatures from "./ProductFeatures";
import SpecialOffers from "./SpecialOffers";

function LeftSidebar() {
  return (
    <div className="uk-width-1-3@m">
      <aside className="sidebar">
       <ProductFeatures/>
        <SpecialOffers/>
      </aside>
    </div>
  );
}

export default LeftSidebar;
