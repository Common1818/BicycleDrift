import React from "react";

// import "./css/ProductDescription.css";

const ProductDescription = ({
  setPrice,
  setDescription,
  setproductName,
  setmodelYear,
  setActualPrice,
}) => {
  return (
    <div class="product-description col-lg-5">
      <main class="card main-grid">
        <div class="card__content">
          <div class="card__head">
            <h2>
              <input
                style={{ width: "100%" }}
                onChange={(e) => setproductName(e.target.value)}
                placeholder="Product Heading"
                type="text"
              />
              <br /> {"("}{" "}
              <input
                onChange={(e) => setmodelYear(e.target.value)}
                placeholder="ModelYear"
                style={{ width: "50%" }}
                type="number"
              />{" "}
              {")"}
            </h2>
            <div class="card__text">
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Product Description"
                cols="30"
                rows="2"
              ></textarea>
              <ul class="description-promise">
                <li>Fre Home Delivery</li>
                <li>Fully Fitted ready to ride</li>
                <li>Free accessories worth 500</li>
              </ul>
            </div>
            <p class="card__price">
              &#8377;{" "}
              <input
                onChange={(e) => setActualPrice(e.target.value)}
                style={{ width: "50%" }}
                placeholder="Actual Price"
                type="number"
              />
              &#8377;{" "}
              <input
                onChange={(e) => setPrice(e.target.value)}
                style={{ width: "50%" }}
                placeholder="Marked Price"
                type="number"
              />
              <br />
            </p>
          </div>

          <button disabled href="#" class="btn btn--primary">
            add to cart
          </button>
          <div style={{ fontSize: "2rem", fontWeight: "800" }} className="or">
            OR
          </div>
          <button disabled href="#" class="btn btn--primary">
            Buy Now{" "}
            <img src="https://www.svgrepo.com/show/10112/map.svg" alt="" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductDescription;
