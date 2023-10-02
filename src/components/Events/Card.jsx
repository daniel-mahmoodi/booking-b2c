import React from "react";

const Card = ({data}) => {
  return (
    <div
      className="card border border-0 px-0"
      style={{
        width: "18rem",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <div className="blog-card__media shine" style={{ marginBottom: "10px" }}>
        <img
          src="assets/img/blog-thumb-1.jpg"
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">از سرور</h5>
        <p className="card-text">توضیحات از سرور</p>
        <button
          href="#"
          className="border border-secondary rounded-pill py-2 px-3 text-black bg-white fw-semibold"
        >
          ثبت سفارش
        </button>
      </div>
    </div>
  );
};

export default Card;
