import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import MyCardsLoader from "../Layout/MyCardsLoader";

function Events() {
  const myCardsLoader = useSelector((state) => state.event.myCardsLoader);
  const showCardsError = useSelector((state) => state.event.showCardsError);
  const listOfServices = useSelector((state) => state.event.listOfServices);
  return (
    <div className="uk-section-large uk-container" style={{ paddingTop: 0 }}>
      {/* Repeat this block for each blog post */}

      {!myCardsLoader ? (
        <div
          className="uk-grid uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s"
          data-uk-grid
        >
          {listOfServices.map((service) => (
            <Card key={service.id} data={service} />
          ))}
        </div>
      ) : (
        <li className="d-flex p-2 ">
          <MyCardsLoader />
          <MyCardsLoader />
          <MyCardsLoader />
        </li>
      )}
      {showCardsError && <p text-red>سرویس وجود ندارد.</p>}

      {/* End of repeated block */}
      {/* pagination */}
      {/* <ul className="uk-pagination uk-flex-center uk-margin-large-top">
        <li></li>
        <li className="uk-active"><span>1</span></li>
        <li><a>2</a></li>
        <li><a>3</a></li>
        <li>
          <a><i className="fa fa-chevron-left" aria-hidden="true"></i></a>
        </li>
      </ul> */}
    </div>
  );
}

export default Events;
