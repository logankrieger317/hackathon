const express = require('express');
const router = express.Router();

const userCtrlr = require('../controllers/user')


// Prepended with /user

//Sign Up
router.post('/signup', userCtrlr.signup)

// Edit Profile
router.patch('/edit', userCtrlr.editProfile);


module.exports = router;