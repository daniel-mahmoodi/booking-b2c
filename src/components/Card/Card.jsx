import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSanses, getServiceDetails } from "../../store/event-action";
import { useHistory } from "react-router-dom";
import MyLoading from "../Layout/MyLoading";
import { eventActions } from "../../store/event-slice";

const Card = ({ data }) => {
  const dispatch = useDispatch();
  const acceptButtonLoading = useSelector(
    (state) => state.event.acceptButtonLoading
  );
  const history = useHistory();

  const selectCardHandler = () => {
    dispatch(getServiceDetails(data.id));
    history.push("/single-page");
  };
  const submitOrderHandler = (event) => {
    event.stopPropagation();
    dispatch(getSanses(data.id));
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
            <a href="09_blog-post.html">
              <img
                src={data.imageUrl}
                alt={data.title}
                style={{ width: "100%" }}
              />
            </a>
          </div>
          <div className="blog-card__body">
            <div className="blog-card__title">
              <div href="09_blog-post.html" style={{ fontSize: "18px" }}>
                {data.title}
              </div>
            </div>
            <div className="blog-card__intro">
              <p style={{ textAlign: "justify", fontSize: "14px" }}>
                {data.description}
              </p>
            </div>
            <div
              className="listing-card__location"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <span>{data.price}تومان</span>
            </div>
            <div
              className="blog-card__more"
              style={{ textAlign: "center", paddingBottom: "15px" }}
              onClick={submitOrderHandler}
            >
              <button
                className="uk-button uk-button-default"
                href="09_blog-post.html"
              >
                {acceptButtonLoading ? (
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
