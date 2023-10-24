import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <div
      className="section-popular"
      style={{ marginTop: "20px", position: "relative" }}
    >
      <div
        className="uk-container uk-margin-large-bottom "
        style={{ marginBottom: "20px !important" }}
      >
        <Swiper
          
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper2 rounded-4"
        >
          <SwiperSlide>
            {" "}
            <img src="/assets/img/slider/1.jpg" alt="..." loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="/assets/img/slider/2.jpg" alt="..." loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/slider/3.jpg" alt="..." loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/img/slider/4.jpg" alt="..." loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;

/* <script>
window.addEventListener("load", () => {
  let sliderElement = document.getElementById("infiniteSliding");
  const container = sliderElement.querySelector(".slider-container");

  const infiniteScrollToFirstWhenOnLast = () => {
    if (container.lastElementChild == container.querySelector(".slide-visible")) {
      container.scroll({
        left: 0,
        behavior: "instant",
      });
    }
  };
  //Append the first slide as the last
  container.appendChild(container.firstElementChild.cloneNode(true));
  //Add an additional indicator button to keep counts correct
  sliderElement
    .querySelector(".slider-indicators")
    .appendChild(
      sliderElement
        .querySelector(".slider-indicators")
        .lastElementChild.cloneNode(true)
    );
  swiffyslider.onSlideEnd(sliderElement, infiniteScrollToFirstWhenOnLast, 90);
});
</script> */
