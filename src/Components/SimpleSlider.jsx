import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://i.ibb.co/svJrjqdD/c89e77-i-Stock-1364679535.jpg" alt="" />
      </div>
      <div>
        <img src="https://i.ibb.co/YBWyF8nv/29079-hd.jpg" alt="" />
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
}