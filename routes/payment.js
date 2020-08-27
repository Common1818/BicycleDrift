// payment
const express = require("express");

// Middleware for body parsing
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });

const router = express.Router();

const { makePayment, paymentCallback } = require("../controllers/payment");

router.post("/paynow", [parseUrl, parseJson], makePayment);

router.post("/callback", paymentCallback);

module.exports = router;
