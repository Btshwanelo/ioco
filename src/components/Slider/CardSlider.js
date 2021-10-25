import React, { useState } from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { responsive } from "./Responsive";

import "./CardSlider.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <Button>
        {" "}
        <svg width="6" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 9l4-4-4-4 4 4z"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>{" "}
      </Button>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <Button>
        {" "}
        <svg
          _ngcontent-serverApp-c84=""
          width="6"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            _ngcontent-serverApp-c84=""
            d="M1 9l4-4-4-4 4 4z"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </Button>
    </div>
  );
};

const CardSlider = ({ images, slidesToShow = 1 }) => {
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
    responsive,
  };

  const CardTemplate = images.map((image, idx) => {
    return (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide"}
        key={image.id}
      >
        <div className="slideWrapper">
          <Card
            classN={
              idx === imageIndex ? "card__component" : "card__component__active"
            }
            title={image.title}
          >
            {idx === 0 && (
              <button className="card_button">
                START HERE{" "}
                <svg width="6" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 9l4-4-4-4 4 4z"
                    stroke="#fff"
                    stroke-width="2"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            )}
          </Card>
        </div>
      </div>
    );
  });

  return <Slider {...settings}>{CardTemplate}</Slider>;
};

export default CardSlider;
