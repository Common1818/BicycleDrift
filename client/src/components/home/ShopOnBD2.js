/*eslint-disable */
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import $ from "jquery";
import { searchResult } from "../../actions/products";

const ShopOnBD = ({ history, searchResult }) => {
  return (
    <div className="shop-onBD-container">
      <div className="shop-on-bd row desktop">
        <div className="col-sm-4">
          <a
            onClick={() => {
              $("html, body").animate({ scrollTop: 10 }, 500);
              searchResult("Kids", history);
            }}
          >
            <img
              src="https://drive.google.com/uc?export=view&id=19Xr2il5WYDPzwJHgZAORIHvE-iwUUJfU"
              alt=""
            ></img>
          </a>
        </div>
        <div className="col-sm-4">
          <a
            onClick={() => {
              $("html, body").animate({ scrollTop: 10 }, 500);
              searchResult("accessory", history);
            }}
          >
            <img
              src="https://drive.google.com/uc?export=view&id=1Wij-KVe3v1QInXZaNc3fszhex3-e-C12"
              alt=""
            />
          </a>
        </div>
        <div className="col-sm-4">
          <a
            onClick={() => {
              $("html, body").animate({ scrollTop: 10 }, 500);
              searchResult("Walkers", history);
            }}
          >
            <img
              src="https://drive.google.com/uc?export=view&id=1Ep3UJZI6s8Fqu7vD_CjLHBsSIED8-5wo"
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
                  searchResult("Kids", history);
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=view&id=19Xr2il5WYDPzwJHgZAORIHvE-iwUUJfU"
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
                  searchResult("accessory", history);
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=view&id=1Wij-KVe3v1QInXZaNc3fszhex3-e-C12"
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
                  searchResult("Walkers", history);
                }}
              >
                <img
                  src="https://drive.google.com/uc?export=view&id=1Ep3UJZI6s8Fqu7vD_CjLHBsSIED8-5wo"
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
