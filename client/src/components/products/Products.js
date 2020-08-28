import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";

import { getAllBikes } from "../../actions/products";
import { getAllCategories } from "../../actions/category";
import { emptyProductState } from "../../actions/product";
import { searchResult } from "../../actions/products";

import Filter from "./Filter";
import Loader from "../layout/Loader";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import "./css/Products.css";

const Products = ({
  getAllBikes,
  getAllCategories,
  emptyProductState,
  bikes,
  accessories,
  categories,
  searchResults,
  searchResult,
  loading,
  match,
}) => {
  useEffect(() => {
    getAllBikes();
    getAllCategories();
    emptyProductState();
  }, []);

  const type = match.params.type;

  const products =
    type === "search"
      ? searchResults.length === 0
        ? bikes
        : searchResults
      : type === "bikes"
      ? bikes
      : accessories;

  console.log("products: ", products);

  const heading =
    type === "search"
      ? "Search Results..."
      : type === "bikes"
      ? "Bicycles..."
      : "Accessories...";

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return loading ? (
    <Loader />
  ) : (
    <div className="products-container">
      <div className="add-to-cart-gif">
        <img src="" alt="" srcset="" />
      </div>
      <h1>{heading}</h1>
      {type === "search" || type === "bikes" ? (
        <div className="filter">
          <Filter categories={categories} searchResult={searchResult} />
        </div>
      ) : null}

      <Row className="wrapper">
        {currentProducts &&
          currentProducts.map((item) => (
            <ProductCard product={item} key={item._id} />
          ))}
      </Row>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bikes: state.products.Bikes,
  accessories: state.products.Accessories,
  searchResults: state.products.SearchResults,
  loading: state.products.loading,
  categories: state.category.categories,
});

export default connect(mapStateToProps, {
  getAllBikes,
  emptyProductState,
  getAllCategories,
  searchResult,
})(Products);
