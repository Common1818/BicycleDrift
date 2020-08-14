const express = require('express');
const router = express.Router();

const { createOrder, getOrder, deleteOrder } = require('../controllers/order');

const { isSignedIn, isAuthenticated } = require('../middleware/index');
const { getUserById } = require('../controllers/user');
const { getOrderById } = require('../controllers/order');

//params
router.param('userId', getUserById);
router.param('orderId', getOrderById);

//create an order
router.post('/order/create/:userId', isSignedIn, isAuthenticated, createOrder);

// get an order
router.get('/order/:orderId/:userId', isSignedIn, isAuthenticated, getOrder);

// delete an order
router.delete(
   '/order/:orderId/:userId',
   isSignedIn,
   isAuthenticated,
   deleteOrder
);

module.exports = router;
