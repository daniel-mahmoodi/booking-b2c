import React from "react";
import { useHistory } from "react-router-dom";
import SubmitButton from "../Layout/SubmitButton";
const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const Card = ({ data }) => {

  const history = useHistory();
  const selectCardHandler = () => {
    history.push(`/service-details/${data.id}`);
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
              <span>{Number(data.price).toLocaleString()}تومان</span>
            </div>
            <SubmitButton id={data.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
