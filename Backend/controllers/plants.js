const User = require('../models/user');

module.exports = {
    search,
    details
}

// Returns list of plants based on search parameters
// Needs userId
// Optional: indoor/outdoor, poison, edible, sunlight, (maybe watering)
async function search(req, res) {
    console.log('Plant search controller hit')
    try {
        
    } catch (err) {
        
    }
}

// Shows plant details when user clicks on a plant
// plantId is needed
async function details(req, res) {
    console.log('Plant details controller hit')
    try {

    } catch (err) {

    }
}