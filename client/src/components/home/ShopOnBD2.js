import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import $ from "jquery";

const ShopOnBD = () => {
  return (
    <div class="shop-onBD-container">
      <div class="shop-on-bd row desktop">
        <div class="col-sm-4">
          <Link
            onClick={() => {
              $("html, body").animate({ scrollTop: 10 }, 500);
            }}
            to="/products/bikes"
          >
            <img
              src="http://drive.google.com/uc?export=view&id=1kJk3YTv-WmiLmgG8eGELxbjpJPx0l3gI"
              alt=""
            ></img>
          </Link>
        </div>
        <div class="col-sm-4">
          <Link>
            <img
              src="http://drive.google.com/uc?export=view&id=1Umqe9MtXsfL1rA8DZ3PqKlTW1Hon7iD5"
              alt=""
            />
          </Link>
        </div>
        <div class="col-sm-4">
          <Link
            onClick={() => {
              $("html, body").animate({ scrollTop: 10 }, 500);
            }}
            to="/products/bikes"
          >
            <img
              src="http://drive.google.com/uc?export=view&id=1kEOUcXjtS412XTe9cfCr4p1Eh15rpVmz"
              alt=""
            ></img>
          </Link>
        </div>
      </div>
      {/* Mobile view */}
      <div class="shop-on-bd mobile">
        <Carousel interval={10000000}>
          <Carousel.Item>
            <div class="col-sm-4">
              <Link to="/products/bikes">
                <img
                  src="http://drive.google.com/uc?export=view&id=1kJk3YTv-WmiLmgG8eGELxbjpJPx0l3gI"
                  alt=""
                ></img>
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div class="col-sm-4">
              <img
                src="http://drive.google.com/uc?export=view&id=1Umqe9MtXsfL1rA8DZ3PqKlTW1Hon7iD5"
                alt=""
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-sm-4">
              <Link tp="/products/bikes">
                <img
                  src="http://drive.google.com/uc?export=view&id=1kEOUcXjtS412XTe9cfCr4p1Eh15rpVmz"
                  alt=""
                ></img>
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ShopOnBD;
