const express = require('express');
const router = express.Router();

const plantsCtrlr = require('../controllers/plants')


// Router to search plants
router.get('/search', plantsCtrlr.search )

// Router to get plant details
router.get('/details', plantsCtrlr.details)