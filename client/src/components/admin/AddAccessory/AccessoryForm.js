/*eslint-disable */
import React, { useState, useEffect } from "react";
import ProductHeading from "./ProductHeading";
import { connect } from "react-redux";
import { getAllCategories } from "../../../actions/category";
import { getAllBrands } from "../../../actions/brand";
import ProductDesktop from "./ProductDesktop";
import ProductDescription from "./ProductDescription";
import SpecTable from "./SpecTable";
import { addAccessory } from "../../../actions/product";

const AccessoryForm = ({ getAllCategories, getAllBrands, addAccessory }) => {
  useEffect(() => {
    getAllCategories();
    getAllBrands();
  }, []);
  const [productImage1, setproductImage1] = useState("");
  const [productImage2, setproductImage2] = useState("");
  const [productImage3, setproductImage3] = useState("");
  const [productImage4, setproductImage4] = useState("");
  const [category, setcategory] = useState("");
  const [brand, setbrand] = useState("");
  const [stock, setstock] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [name, setproductName] = useState("");
  const [modelYear, setmodelYear] = useState("");
  const [actualPrice, setActualPrice] = useState("");
  const [Rating, setRating] = useState("");
  const [specs, setSpecs] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    addAccessory({
      images: [productImage1, productImage2, productImage3, productImage4],
      category,
      brand,
      stock,
      price: Price,
      actualPrice,
      name,
      modelYear,
      Rating,
      description: Description,
      specifications: specs,
    });
  };

  return (
    <div class="fluid-container p-4 m-2">
      <h2 className="text-center">Add Accessory</h2>
      <form onSubmit={handleSubmit}>
        <div class="row product-container">
          <div class=" product-image col-lg-7">
            <ProductHeading
              setcategory={setcategory}
              setbrand={setbrand}
              setRating={setRating}
              setstock={setstock}
              Rating={Rating}
            />
            <ProductDesktop
              img1={setproductImage1}
              img4={setproductImage4}
              img3={setproductImage3}
              img2={setproductImage2}
            />
          </div>
          <ProductDescription
            setPrice={setPrice}
            setActualPrice={setActualPrice}
            setDescription={setDescription}
            setproductName={setproductName}
            setmodelYear={setmodelYear}
          />
        </div>
        <SpecTable specs={specs} setSpecs={setSpecs} />

        {/* <CustomerReviews /> */}
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default connect(null, { getAllCategories, getAllBrands, addAccessory })(
  AccessoryForm
);
