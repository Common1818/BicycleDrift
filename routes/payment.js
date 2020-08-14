const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { isSignedIn, isAuthenticated } = require('../middleware/index');
const { getUserById } = require('../controllers/user');
const { getOrderById } = require('../controllers/order');
const { transaction, callback } = require('../controllers/payment.js');

//params
router.param('userId', getUserById);
router.param('orderId', getOrderById);

router.post(
   '/payment/:userId/:orderId',
   isSignedIn,
   isAuthenticated,
   transaction
);

router.post(`/callback`, callback);

module.exports = router;
