const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

export const signup = async (req, res) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
      return res.status(400).json({
         errors: errors.array(),
      });
   }

   const { name, email, password } = req.body;

   try {
      // See if user exists
      let user = await User.findOne({ email: email });

      if (user) {
         return res.status(400).json({
            errors: [{ msg: 'User already exists' }],
         });
      }

      user = new User(req.body);

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jwt
      const payload = {
         user: {
            id: user._id,
         },
      };

      jwt.sign(
         payload,
         config.get('jwtSecret'),
         { expiresIn: 36000000000 },
         (err, token) => {
            if (err) throw err;
            return res.json({ token });
         }
      );
   } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
   }
};

export const signin = async (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }

   const { email, password } = req.body;

   try {
      let user = await User.findOne({ email });

      if (!user) {
         return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
         return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
         user: {
            id: user.id,
         },
      };

      jwt.sign(
         payload,
         config.get('jwtSecret'),
         { expiresIn: 360000 },
         (err, token) => {
            if (err) throw err;
            return res.json({ token });
         }
      );
   } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
   }
};
