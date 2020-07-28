import React from "react";
import $ from "jquery";
import { Spinner } from "react-bootstrap";
import "./css/ProductDescription.css";

const ProductDescription = () => {
  return (
    <div class="product-description col-lg-5">
      <main class="card main-grid">
        <div class="card__content">
          <div class="card__head">
            <h2>
              Montra Rock <br /> (2018)
            </h2>
            <div class="card__text">
              A mountain bike From Montra
              <ul class="description-promise">
                <li>Fre Home Delivery</li>
                <li>Fully Fitted ready to ride</li>
                <li>Free accessories worth 500</li>
              </ul>
            </div>
            <p class="card__price">&#8377; 21000</p>
          </div>
          <div className="pincode__check">
            <input
              type="number"
              placeholder="Check Availability"
              name="pincode"
            />
            <button
              onClick={() => {
                $(".checking").css("display", "block");
              }}
              type="submit"
            >
              Check
              <Spinner className="checking" animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </button>
          </div>

          <button href="#" class="btn btn--primary">
            add to cart
          </button>
          <div style={{ fontSize: "2rem", fontWeight: "800" }} className="or">
            OR
          </div>
          <button href="#" class="btn btn--primary">
            Pickup From Store{" "}
            <img src="https://www.svgrepo.com/show/10112/map.svg" alt="" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductDescription;
