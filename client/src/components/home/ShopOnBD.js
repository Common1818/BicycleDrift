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
              searchResult("toddlers", history);
            }}
          >
            <img
              src="http://drive.google.com/uc?export=view&id=1MdDMR3ODAQHHH87e1njPsitvd9BzYHn7"
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
              src="http://drive.google.com/uc?export=view&id=1Umqe9MtXsfL1rA8DZ3PqKlTW1Hon7iD5"
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
              src="http://drive.google.com/uc?export=view&id=1kEOUcXjtS412XTe9cfCr4p1Eh15rpVmz"
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
                  searchResult("toddlers", history);
                }}
              >
                <img
                  src="http://drive.google.com/uc?export=view&id=1MdDMR3ODAQHHH87e1njPsitvd9BzYHn7"
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
                  src="http://drive.google.com/uc?export=view&id=1Umqe9MtXsfL1rA8DZ3PqKlTW1Hon7iD5"
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
                  src="http://drive.google.com/uc?export=view&id=1kEOUcXjtS412XTe9cfCr4p1Eh15rpVmz"
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
