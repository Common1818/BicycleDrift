const Order = require("../models/Order");
const Product = require("../models/Bicycle");

const express = require("express");
const router = express.Router();

const shortid = require("shortid");
const Razorpay = require("razorpay");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// app.use(cors());
// app.use(bodyParser.json());

const razorpay = new Razorpay({
  key_id: "rzp_live_EdybhABLI9eugg",
  key_secret: "3qIdNDcolOyQDWK0MzWt7AWd",
});

router.post("/razorpay", async (req, res) => {
  const { amount } = req.body;
  const payment_capture = 1;

  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);

    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

// Webhook Route
router.post("/verification", async (req, res) => {
  // do a validation
  const secret = "BicycleDrift@123";

  //   console.log(req.body);
  const { payload } = req.body;
  const entity = payload.payment.entity;
  const { description, status, amount, id } = entity;
  const orId = description.split(":")[1];
  //   console.log(orId);
  //   console.log({ description, status, amount, id });

  const crypto = require("crypto");

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    //
    const order = await Order.findById(orId);
    order.status = "Payment Successsful";
    order.paymentId = id;
    await order.save();
    const { products, billingDetails, total, _id } = order;
    products &&
      products.map(async (product) => {
        const { _id, quantity } = product;
        const prod = await Product.findById(_id);

        prod.stock = prod.stock - parseInt(quantity);
        await prod.save();
      });
  } else {
    const order = await Order.findById(orId);
    order.status = "Payment Failed";
    await order.save();
  }
  res.json({ status: "ok" });
});

module.exports = router;
