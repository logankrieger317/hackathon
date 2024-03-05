const express = require('express');
const router = express.Router();

const userCtrlr = require('../controllers/user')


// Prepended with /user

//Sign Up
router.post('/signup', userCtrlr.signup)

//Login
// router.get('/login', userCtrlr.login)

//Logout

module.exports = router;