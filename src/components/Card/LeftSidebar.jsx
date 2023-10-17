import React from "react";
import ProductFeatures from "./ProductFeatures";
import SpecialOffers from "./SpecialOffers";

function LeftSidebar({ price, id }) {
  return (
    <div className="uk-width-1-3@m">
      <aside className="sidebar">
        <ProductFeatures price={price} id={id} />
        {/* <SpecialOffers/> */}
      </aside>
    </div>
  );
}

export default LeftSidebar;
