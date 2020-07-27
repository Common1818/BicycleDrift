const express = require('express');
const router = express.Router();

const { getUserById, getUser } = require('../controllers/user');
const { isSignedIn, isAuthenticated } = require('../middleware/index');

router.param('userId', getUserById);

router.get('/user/:userId', isSignedIn, isAuthenticated, getUser);
