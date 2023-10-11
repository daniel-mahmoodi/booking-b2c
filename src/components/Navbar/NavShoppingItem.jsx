import React from "react";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store/basket-slice";
import { useState } from "react";
import { useEffect } from "react";
const IMGUrl = process.env.REACT_APP_API_IMAGE_URL;
const NavShoppingItem = ({ data }) => {
  console.log('datain nabshop',data);
  const [image, setImage] = useState("");
  useEffect(() => {
    if (data.tickets) {
      // setImage(`${IMGUrl}${data.imageUrl.replace("..", "")}`);
    }
  }, [data.imageUrl, data.tickets]);
  const dispatch = useDispatch();
  const eraseItemFromBasketHandler = () => {
    dispatch(basketActions.eraseItemFromBasket(data.id));
  };
  return (
    <div className="item">
      <img src={image} alt="" />
      <div className="p-2">
        <p className="m-0 fw-md title">{data.title}</p>
        <p className="m-0 description">توضیحات بیشتر</p>
      </div>
      <span onClick={eraseItemFromBasketHandler} className="delete">
        <i className="fa fa-times" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default NavShoppingItem;
