import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSanses, getServiceDetails } from "../../store/event-action";
import { useHistory } from "react-router-dom";
import MyLoading from "../Layout/MyLoading";
import { eventActions } from "../../store/event-slice";
const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const Card = ({ data }) => {
  const dispatch = useDispatch();
  const acceptButtonLoading = useSelector(
    (state) => state.event.acceptButtonLoading
  );
  const serviceDetails = useSelector((state) => state.event.serviceDetails);
  const history = useHistory();

  const selectCardHandler = () => {
    dispatch(getServiceDetails(data.id));
    history.push("/service-details");
  };
  const submitOrderHandler = (event) => {
    event.stopPropagation();
    dispatch(getServiceDetails(data.id));
    dispatch(getSanses(data.id));
    dispatch(eventActions.toggleTicketComponent(false));
  };
  return (
    <div onClick={selectCardHandler}>
      <div
        className="blog-card"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          borderRadius: "10px",
        }}
      >
        <div className="blog-card__box">
          <div
            className="blog-card__media shine"
            style={{ marginBottom: "10px" }}
          >
            <a>
              <img
                src={`${IMGUrl}${data.imageUrl.replace("..", "")}`}
                alt={data.title}
                style={{ width: "100%" }}
              />
            </a>
          </div>
          <div className="blog-card__body">
            <div className="blog-card__title">
              <div style={{ fontSize: "16px" }}>
                {`${data.title} ${data.author}`}
              </div>
            </div>
            {/* <div className="blog-card__intro">
              <p style={{ textAlign: "justify", fontSize: "14px" }}>
                {data.description}
              </p>
            </div> */}
            <div
              className="listing-card__location"
              style={{
                padding: "3px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                height: "24px",
              }}
            >
              <span>{data.price}تومان</span>
            </div>
            <div
              className="blog-card__more"
              style={{ textAlign: "center", paddingBottom: "15px" }}
              onClick={submitOrderHandler}
            >
              <button className="uk-button uk-button-default">
                {acceptButtonLoading && serviceDetails.id === data.id ? (
                  <MyLoading color={"#ffffff"} />
                ) : (
                  "ثبت سفارش"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
