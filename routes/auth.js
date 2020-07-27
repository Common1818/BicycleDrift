const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { signup, signin } = require('../controllers/auth');

router.post(
   '/signup',
   [
      check('name', 'Name is required').notEmpty(),
      check('email', 'Please enter a valid email').isEmail(),
      check(
         'password',
         'Please enter a password with 6 or more character'
      ).isLength({ min: 6 }),
   ],
   signup
);

router.post(
   '/signin',
   [
      check('email', 'Email is required').isEmail(),
      check('password', 'Password field is required').isLength({
         min: 1,
      }),
   ],
   signin
);

module.exports = router;
