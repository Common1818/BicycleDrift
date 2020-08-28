import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import "./css/ProductHeading.css";

const ProductHeading = ({
  setRating,
  setcategory,
  setbrand,
  setgender,
  setstock,
  Rating,
  category,
  brand,
  setproductType,
  setMinAge,
  setMaxAge,
}) => {
  const [show, setShow] = useState(false);
  const categoryOptions = category.categories;
  const brandOptions = brand.brands;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div class="product-header">
      <div class="rating-box">
        <img
          onClick={handleShow}
          src="https://www.svgrepo.com/show/22427/star.svg"
          alt=""
        ></img>
        <span>{Rating}</span>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={{ background: "#fdfdfd" }} closeButton>
            <Modal.Title>Rating Value</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "#fdfdfd" }}>
            <input
              className=""
              onChange={(e) => {
                setRating(e.target.value);
              }}
              max="5"
              min="1"
              placeholder="Product Rating"
              type="text"
            />
          </Modal.Body>
          <Modal.Footer style={{ background: "#fdfdfd" }}>
            <Button variant="primary" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="select-category">
        <span>Select Category</span>

        <select
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        >
          <option value="null">null</option>
          {categoryOptions &&
            categoryOptions.map((category) => {
              return <option value={category._id}>{category.name}</option>;
            })}
        </select>
      </div>
      <div className="select-category">
        <span>Select Brand</span>
        <select
          onChange={(e) => {
            setbrand(e.target.value);
          }}
        >
          <option value="null">Select</option>
          {brandOptions &&
            brandOptions.map((brand) => {
              return <option value={brand._id}>{brand.brandname}</option>;
            })}
        </select>
      </div>
      <div className="select-category">
        <span>Select Gender</span>
        <select
          onChange={(e) => {
            setgender(e.target.value);
          }}
        >
          <option value="null">Select</option>
          <option value="Unisex">Unisex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="select-category">
        <span>Select ProductType</span>
        <select
          onChange={(e) => {
            setproductType(e.target.value);
          }}
        >
          <option value="null">Select</option>
          <option value="Bike">Bike</option>
          <option value="Accessory">Accessory</option>
          <option value="Spares">Spare</option>
        </select>
      </div>
      <div className="select-category">
        <span>Stock</span>
        <input
          style={{ width: "30px" }}
          onChange={(e) => {
            setstock(e.target.value);
          }}
          type="number"
          name=""
          id=""
        />
      </div>
      <div className="select-category">
        <span>Age</span>
        <br />
        <input
          style={{ width: "30px" }}
          onChange={(e) => {
            setMinAge(e.target.value);
          }}
          type="number"
        />{" "}
        {" to "}
        <input
          style={{ width: "30px" }}
          onChange={(e) => {
            setMaxAge(e.target.value);
          }}
          type="number"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  brand: state.brand,
  category: state.category,
});

export default connect(mapStateToProps)(ProductHeading);
