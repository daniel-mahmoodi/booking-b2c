import React from "react";
import { Link } from "react-router-dom";
const Catalog = () => {
  return (
    <div class="c-scroll-container">
      <div class="c-scroll-container-width">
        <div class="uk-container uk-container-xlarge c-scroll">
          <div class="item">
            <Link href="#">
              <div class="shine svg-container">
                <img src="assets/img/header/safari.svg" alt="" />
                <span>سافاری</span>
              </div>
            </Link>
          </div>
          <div class="item">
            <Link href="#">
              <div class="shine svg-container">
                <img src="assets/img/header/concert.svg" alt="" />
                <span>جنگ و کنسرت</span>
              </div>
            </Link>
          </div>
          <div class="item">
            <Link href="#">
              <div class="shine svg-container">
                <img src="assets/img/header/ship.svg" alt="" />
                <span>کشتی تفریحی</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
