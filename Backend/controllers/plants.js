const User = require('../models/user');

module.exports = {
    search,
    details
}


// Returns list of plants based on search parameters
// Required: userId
// Optional: indoor/outdoor, Maybe: poison, edible, sunlight, watering
async function search(req, res) {
    try {
        console.log('Plant search controller hit')
        const inOut = req.query.indoor
        // grab user Id from req
        const userId = req.user._id
        console.log(userId)
        // use userID to get user's location
        const userZip = userId.location
        console.log(userZip)
        // pass the location into Hardiness API
        //TODO: setup API call with correct url
        const hardiness = await axios.get('api url here', userZip);
        // pass Hardiness number and any optional parameters into PlantAPI
        let apiUrl = `https://perenual.com/api/species-list?key=${process.env.PLANT_API_KEY}&page=1&hardiness=${hardiness}`;
            // check if indoor/outdoor/both
            // TODO: write a 'searchFilter' function that handles the optional filters like inOut below
        if (inOut === 1) {
            apiUrl += '&indoor=1'
        } else if (inOut === 0) {
            apiUrl += '&indoor=0'
        } else {
            // if neither indoor or outdoor are selected by user,all indoor&outdoor plants are searched for
        }

        const plantList = await axios.get(apiUrl)
        // send that response to the frontend
        res.json(plantList.data)
        
    } catch (err) {
        console.error('Problem at controllers/plants.js search function', err);
        res.status(500).json({ err: 'Internal server error' });
    }
}

// Shows plant details when user clicks on a plant
// Required: plant's id
async function details(req, res) {
    console.log('Plant details controller hit')
    try {
        const plantId = req.query.plantId
        const plantDetails = await axios.get(`https://perenual.com/api/plant-details?id=${plantId}&key=${process.env.PLANT_API_KEY}`);
        res.json(plantDetails.data);
    } catch (err) {
        console.error('Error fetching plant details:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}