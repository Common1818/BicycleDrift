/*eslint-disable */
import React from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import $ from "jquery";
import { searchResult } from "../../actions/products";
import "./css/ShopOnBD.css";

const ShopOnBD = ({ searchResult, history }) => {
  return (
    <div className="shop-onBD-container">
      <h2>Shop On BicycleDrift</h2>
      <div className="shop-on-bd row desktop">
        <div className="col-sm-4">
          <a
            onClick={() => {
              $("html, body").animate({ scrollTop: 10 }, 500);
              searchResult("Toddlers", history);
            }}
          >
            <img
              src="https://drive.google.com/uc?export=view&id=1xa8Nw4YL6pwaAjWBAOvqBAOGxjrn35FE"
              alt=""
            ></img>
          </a>
        </div>
        <div className="col-sm-4">
          <a
            onClick={() => {
              $("html, body").animate({ scrollTop: 10 }, 500);
              searchResult("girls", history);
            }}
          >
            <img
              src="https://drive.google.com/uc?export=view&id=1mDsvcFqOoKm8aUI0hJdMC_oWB3tWeFS_"
              alt=""
            />
          </a>
        </div>
        <div className="col-sm-4">
          <a
            onClick={() => {
              $("html, body").animate({ scrollTop: 10 }, 500);
              searchResult("teens", history);
            }}
          >
            <img
              src="https://drive.google.com/uc?export=view&id=1kEOUcXjtS412XTe9cfCr4p1Eh15rpVmz"
              alt=""
            ></img>
          </a>
        </div>
      </div>
      {/* Mobile view */}
      <div className="shop-on-bd mobile">
        <Carousel interval={10000000}>
          <Carousel.Item>
            <div className="col-sm-4">
              <a
                onClick={() => {
                  $("html, body").animate({ scrollTop: 10 }, 500);
                  searchResult("Toddlers", history);
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=view&id=1xa8Nw4YL6pwaAjWBAOvqBAOGxjrn35FE"
                  alt=""
                ></img>
              </a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-sm-4">
              <a
                onClick={() => {
                  $("html, body").animate({ scrollTop: 10 }, 500);
                  searchResult("girls", history);
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=view&id=1mDsvcFqOoKm8aUI0hJdMC_oWB3tWeFS_"
                  alt=""
                />
              </a>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-sm-4">
              <a
                onClick={() => {
                  $("html, body").animate({ scrollTop: 10 }, 500);
                  searchResult("teens", history);
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=view&id=1kEOUcXjtS412XTe9cfCr4p1Eh15rpVmz"
                  alt=""
                ></img>
              </a>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default connect(null, { searchResult })(withRouter(ShopOnBD));
