/*eslint-disable */
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./css/Carousel.css";
import carousel1 from "./Images/carousel1.jpg";
import carousel2 from "./Images/carousel2.jpg";
import carousel3 from "./Images/carousel3.jpg";

const HomeCarousel = ({ carousel }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="home-carousel">
      {carousel && carousel ? (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {carousel &&
            carousel.map((data) => {
              if (data.imageUrl !== "") {
                return (
                  <Carousel.Item key={data.imageUrl}>
                    <img
                      className="d-block w-100"
                      src={data.imageUrl}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              }
            })}
        </Carousel>
      ) : (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousel3} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
};

export default HomeCarousel;
