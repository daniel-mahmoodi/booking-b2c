import React from "react";
const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const ImageSection = ({ serviceName, imageUrl, eventName }) => {
  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "80px",
          backgroundImage: `url(${IMGUrl}${imageUrl.replace("..", "")})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "5px",
          margin: "0 auto",
        }}
      ></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          style={{
            color: "#686e71",
            paddingTop: "10px",
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          {`${serviceName} ${eventName}`}
        </a>
      </div>
    </div>
  );
};

export default ImageSection;
