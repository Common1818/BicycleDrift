import React from "react";
import $ from "jquery";
import "./css/Carousel.css";
import carousel1 from "./Images/carousel1.PNG";
import carousel2 from "./Images/carousel1.PNG";
import carousel3 from "./Images/carousel1.PNG";

const Carousel = () => {
  var duration = 5000; //in miliseconds
  $(document).ready(function () {
    $(".carousel").carousel();
  });
  $(".carousel").carousel();
  setInterval(function () {
    $(".carousel").carousel("next");
  }, duration); //

  return (
    <div class="carousel carousel-slider">
      <a class="carousel-item" href="#one!">
        <img src={carousel1} alt="" />
      </a>
      <a class="carousel-item" href="#two!">
        <img src={carousel2} alt="" />
      </a>
      <a class="carousel-item" href="#three!">
        <img src={carousel3} alt="" />
      </a>
    </div>
  );
};

export default Carousel;
