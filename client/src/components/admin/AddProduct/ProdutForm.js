/*eslint-disable */
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProductDesktop from "./ProductDesktop";
import ProductMobile from "./ProductMobile";
import ProductHeading from "./ProductHeading";
import ProductDescription from "./ProductDescription";
import Specifications from "./Specifications";
import { getAllCategories } from "../../../actions/category";
import { getAllBrands } from "../../../actions/brand";
import { addBike, addAccessory } from "../../../actions/product";
import SpecTable from "../AddAccessory/SpecTable";

const ProuctForm = ({
  getAllCategories,
  getAllBrands,
  addBike,
  addAccessory,
}) => {
  useEffect(() => {
    getAllCategories();
    getAllBrands();
  }, []);

  const [productImage1, setproductImage1] = useState("");
  const [productImage2, setproductImage2] = useState("");
  const [productImage3, setproductImage3] = useState("");
  const [productImage4, setproductImage4] = useState("");
  const [specs, setSpecs] = useState([]);
  const [Rating, setRating] = useState("");
  const [productType, setproductType] = useState("");
  const [Price, setPrice] = useState("");
  const [actualPrice, setActualPrice] = useState("");
  const [name, setproductName] = useState("");
  const [Description, setDescription] = useState("");
  const [modelYear, setmodelYear] = useState("");
  const [color, setcolor] = useState("");
  const [size, setsize] = useState("");
  const [handlebar, sethandlebar] = useState("");
  const [brakes, setbrakes] = useState("");
  const [tyres, settyres] = useState("");
  const [rims, setrims] = useState("");
  const [frontDerailleur, setfrontDerailleur] = useState("");
  const [rearDerailleur, setrearDerailleur] = useState("");
  const [chain, setchain] = useState("");
  const [shifter, setshifter] = useState("");
  const [fork, setfork] = useState("");
  const [frame, setframe] = useState("");
  const [category, setcategory] = useState("");
  const [brand, setbrand] = useState("");
  const [gender, setgender] = useState("");
  const [stock, setstock] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  useEffect(() => {
    console.log(productType);
  }, [productType]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({
    //   images: [productImage1, productImage2, productImage3, productImage4],
    //   name,
    //   Rating,
    //   price: parseInt(Price),
    //   description: Description,
    //   modelyear: parseInt(modelYear),
    //   category,
    //   stock: parseInt(stock),
    //   brand,
    //   gender,
    //   specifications: {
    //     frontderailleur: frontDerailleur,
    //     rearderailleur: rearDerailleur,
    //     shifter,
    //     handlebar,
    //     tire: tyres,
    //     rim: rims,
    //     suspension: fork,
    //     chain,
    //     framematerial: frame,
    //     brakes,
    //     color,
    //     size,
    //   },
    // });
    // const data = {
    //   images: [productImage1, productImage2, productImage3, productImage4],
    //   productType,
    //   name,
    //   Rating,
    //   price: parseInt(Price),
    //   actualPrice: parseInt(actualPrice),
    //   description: Description,
    //   modelyear: parseInt(modelYear),
    //   category,
    //   stock: parseInt(stock),
    //   brand,
    //   gender,
    //   specifications: {
    //     frontderailleur: frontDerailleur,
    //     rearderailleur: rearDerailleur,
    //     shifter,
    //     handlebar,
    //     tire: tyres,
    //     rim: rims,
    //     suspension: fork,
    //     chain,
    //     framematerial: frame,
    //     brakes,
    //     color,
    //     size,
    //   },
    // };
    if (productType === "Bike") {
      addBike({
        images: [productImage1, productImage2, productImage3, productImage4],
        productType,
        name,
        Rating,
        price: parseInt(Price),
        actualPrice: parseInt(actualPrice),
        description: Description,
        modelyear: parseInt(modelYear),
        category,
        stock: parseInt(stock),
        brand,
        color,
        gender,
        age: {
          min: minAge,
          max: maxAge,
        },
        specifications: {
          frontderailleur: frontDerailleur,
          rearderailleur: rearDerailleur,
          shifter,
          handlebar,
          tire: tyres,
          rim: rims,
          suspension: fork,
          chain,
          framematerial: frame,
          brakes,
          color,
          size,
        },
      });
    } else {
      addAccessory({
        images: [productImage1, productImage2, productImage3, productImage4],
        productType,
        name,
        Rating,
        price: parseInt(Price),
        actualPrice: parseInt(actualPrice),
        description: Description,
        modelyear: parseInt(modelYear),
        category,
        stock: parseInt(stock),
        brand,
        gender,
        accessorySpecifications: specs,
        age: {
          min: minAge,
          max: maxAge,
        },
      });
    }
  };

  return (
    <div class="fluid-container p-4 m-2">
      <h2 className="text-center">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div class="row product-container">
          <div class=" product-image col-lg-7">
            <ProductHeading
              setMinAge={setMinAge}
              setMaxAge={setMaxAge}
              setproductType={setproductType}
              setcategory={setcategory}
              setbrand={setbrand}
              setgender={setgender}
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
            <ProductMobile
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

        <hr class="hr-4"></hr>
        {productType && productType === "Bike" ? (
          <Specifications
            setcolor={setcolor}
            setsize={setsize}
            sethandlebar={sethandlebar}
            setbrakes={setbrakes}
            settyres={settyres}
            setrims={setrims}
            setfrontDerailleur={setfrontDerailleur}
            setrearDerailleur={setrearDerailleur}
            setchain={setchain}
            setshifter={setshifter}
            setfork={setfork}
            setframe={setframe}
          />
        ) : (
          <SpecTable specs={specs} setSpecs={setSpecs} />
        )}

        {/* <CustomerReviews /> */}
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default connect(null, {
  getAllCategories,
  getAllBrands,
  addBike,
  addAccessory,
})(ProuctForm);
