const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { isSignedIn, isAuthenticated } = require('../middleware/index');
const { getUserById } = require('../controllers/user');
const { getOrderById } = require('../controllers/order');
const { transaction, callback } = require('../controllers/payment.js');

const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });

//params
router.param('userId', getUserById);
router.param('orderId', getOrderById);

router.post(
   '/payment/:userId/:orderId',
   [parseUrl, parseJson],
   isSignedIn,
   isAuthenticated,
   transaction
);

router.post(`/callback`, callback);

module.exports = router;
