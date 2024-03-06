const express = require('express');
const router = express.Router();

const userCtrlr = require('../controllers/user')


// All are prepended with /user

//Sign Up
router.post('/signup', userCtrlr.signup)

// Edit Profile
router.patch('/edit', userCtrlr.editProfile);

// Login
router.post('/login', userCtrlr.login)

module.exports = router;