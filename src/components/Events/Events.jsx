import React from "react";
import Card from "./Card";

function Events() {
  return (
    <div className="uk-section-large uk-container" style={{ paddingTop: 0 }}>
      <div
        className="uk-grid uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s"
        data-uk-grid
      >
        {/* Repeat this block for each blog post */}
      
          <Card/>
       
        {/* End of repeated block */}
      </div>
      {/* <ul className="uk-pagination uk-flex-center uk-margin-large-top">
        <li></li>
        <li className="uk-active"><span>1</span></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li>
          <a href="#"><i className="fa fa-chevron-left" aria-hidden="true"></i></a>
        </li>
      </ul> */}
    </div>
  );
}

export default Events;
