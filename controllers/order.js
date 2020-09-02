const Order = require("../models/Order");
const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.getOrderById = async (req, res, next, id) => {
  try {
    const order = await Order.findById(id);
    req.order = order;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      error: "Order not found in DB",
    });
  }
};

exports.getAllUserOrders = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ user: userId }).sort({ _id: -1 });
    console.log(orders);
    if (orders.length > 0) {
      res.json({
        orders,
        messages: [{ msg: `Orders were Fetched Successfully` }],
      });
    } else {
      res.json({
        messages: [{ msg: `No Orders were Found` }],
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errors: [{ msg: `Error Fetching Orders` }] });
  }
};

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);

  try {
    await order.save();

    res.json({
      order,
      messages: [{ msg: `Order was created Successfully` }],
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errors: [{ msg: `Error creating order` }] });
  }
};

exports.getOrder = async (req, res) => {
  return res.json(req.order);
};

exports.deleteOrder = async (req, res) => {
  const order = req.order;
  res.json({
    order,
    messages: [{ msg: `Order was deleted Successfully` }],
  });
  try {
    await order.remove();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errors: [{ msg: `Error deleting order` }] });
  }
};

exports.updateOrderAddress = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const order = req.order;
  console.log(req.body);
  order.billingDetails = req.body;

  try {
    await order.save();
    res.json({
      order,
      messages: [{ msg: `billing Details were updated Successfully` }],
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ errors: [{ msg: `Error updating Billing details` }] });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ _id: -1 });
    return res.json({
      orders,
      messages: [{ msg: `"orders fetched Successfully` }],
    });
  } catch (err) {
    console.log(err);
    res.json({
      messages: [{ msg: `Error getting Orders` }],
    });
  }
};

exports.fetchAdminOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    return res.json({
      order,
      messages: [{ msg: `"order fetched Successfully` }],
    });
  } catch (err) {
    console.log(err);
    res.json({
      messages: [{ msg: `Error getting Orders` }],
    });
  }
};
