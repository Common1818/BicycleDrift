const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { isSignedIn, isAdmin, isAuthenticated } = require("../middleware/index");

const {
  addCarouselImage,
  getCarouselImage,
  deleteCarouselImage,
} = require("../controllers/admindata");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);

router.post(
  "/admindata/add/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  [check("carousel", "carousel data is required").notEmpty()],
  addCarouselImage
);

router.get("/getcarousel", getCarouselImage);

router.delete(
  "/admindata/delete/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  deleteCarouselImage
);

module.exports = router;
