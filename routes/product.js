const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  getProductById,
  createProduct,
  createProductcolor,
  getProduct,
  //   photo,
  updateProduct,
  deleteProduct,
  getAllProducts,
  //   getAllUniqueCategories,
} = require("../controllers/product");
const { createAccessory } = require("../controllers/accessory");
const { isSignedIn, isAuthenticated, isAdmin } = require("../middleware/index");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//create bike route
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  [check("name", "Bike name is required").notEmpty()],
  [check("stock", "Stock Value is required").notEmpty()],
  [check("brand", "brand name is required").notEmpty()],
  [check("category", "category is required").notEmpty()],
  [check("price", "price is required").notEmpty()],
  createProduct
);
//create accessory route
router.post(
  "/accessory/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  [check("name", "Accessory name is required").notEmpty()],
  [check("stock", "Stock Value is required").notEmpty()],
  [check("brand", "brand name is required").notEmpty()],
  [check("category", "category is required").notEmpty()],
  [check("price", "price is required").notEmpty()],
  createAccessory
);

// add bike color route
router.post(
  "/product/createcolor/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProductcolor
);

//update route
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);
// get product route
router.get("/product/:productId", getProduct);

// get all products
router.get("/products", getAllProducts);

//update route
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

//delete route
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);

module.exports = router;
