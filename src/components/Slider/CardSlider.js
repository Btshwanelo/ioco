import React, { useState } from "react";
import Slider from "react-slick";
import Card from '../Card/Card'
import Button from '../Button/Button'

import "./CardSlider.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <Button />      
      </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <Button />
      </div>
  );
};

const CardSlider = ({ images, slidesToShow = 5 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    draggable: true,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }
      
      
    ]
  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? "activeSlide" : "slide"}
          key={image.id}
        >
          <div className="slideWrapper">
            <Card />
          </div>
        </div>
      );
    }
    return null;
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default CardSlider;