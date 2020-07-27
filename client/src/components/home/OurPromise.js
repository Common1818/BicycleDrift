import React from "react";
import "./css/OurPromise.css";

const OurPromise = () => {
  return (
    <section id="shiping">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="shipping-box">
              <div class="box-icon">
                <i class="fas fa-truck"></i>
              </div>
              <div class="box-title">
                <h3>Free Shipping</h3>
                <p>above $5 only</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="shipping-box">
              <div class="box-icon">
                <i class="far fa-address-book"></i>
              </div>
              <div class="box-title">
                <h3>Certified Organic</h3>
                <p>100% guarantee</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="shipping-box">
              <div class="box-icon">
                <i class="far fa-money-bill-alt"></i>
              </div>
              <div class="box-title">
                <h3>Huge Savings</h3>
                <p>at lowest price</p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="shipping-box">
              <div class="box-icon">
                <i class="fas fa-recycle"></i>
              </div>
              <div class="box-title">
                <h3>Easy Returns</h3>
                <p>no questions asked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
