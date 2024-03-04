const express = require('express');
const router = express.Router();

const favoritesCtrlr = require('../controllers/favorites')

// endpoints are prepended with '/favorites'. E.g: localhost:3000/favorites/add

// Router to view favorites 
router.get('/', favoritesCtrlr.index)

// Router to add a favorite
router.post('/add', favoritesCtrlr.add)

// Router to unfavorite
router.delete('/remove', favoritesCtrlr.unfavorite)

module.exports = router;