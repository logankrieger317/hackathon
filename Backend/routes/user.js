const express = require('express');
const router = express.Router();

const userCtrlr = require('../controllers/user')


module.exports = router;

//Sign Up
router.post('/signup', userCtrlr.signup)

//Login
router.get('/login', userCtrlr.login)

//Logout

module.exports = router;