const User = require('../models/user');
const axios = require('axios');
const { getHardiness } = require('../helperFunctions');

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
        // if (req.query.indoor) {
        //     const inOut = req.query.indoor
        // }
        // grab user Id from req.body
        // todo: update this to be req.body.userId, once frontend is setup
        const userId = req.query.userId
        console.log(`user id is ${userId}`)
        // use userID to get user's location
        const user = await User.findById(userId)
        console.log(`user object is ${user}`)
        const userZip = user.location
        console.log(userZip)
        
        // pass the location into Hardiness API
        if (!user.hardiness) {
            const hardiness = await getHardiness(userZip)
            console.log(`users hardiness score is ${hardiness}`)
            await User.findByIdAndUpdate(userId, { hardiness: hardiness });
            console.log(`user with hardiness is ${user}`)
        }

        let apiUrl = `https://perenual.com/api/species-list?key=${process.env.PLANT_API_KEY}&page=1&hardiness=${user.hardiness}`;
        console.log(`api url: ${apiUrl}`)
        // check if indoor/outdoor/both
        // if (inOut === 1) {
        //     apiUrl += '&indoor=1'
        // } else if (inOut === 0) {
        //     apiUrl += '&indoor=0'
        // } else {
        //     // if neither indoor or outdoor are selected by user,all indoor&outdoor plants are searched for
        // }

        const plantList = await axios.get(apiUrl)
        console.log(`plantList: ${plantList}`)
        // send that response to the frontend
        res.json(plantList.data)
        
    } catch (err) {
        console.error('Problem at controllers/plants.js search function', err);
        res.status(500).json({ err: 'Problem at controllers/plants.js search function' });
    }
}

// Shows plant details when user clicks on a plant
// Required: plant's id
async function details(req, res) {
    console.log('Plant details controller hit')
    try {
        const plantId = req.query.plantId
        console.log(`plantId is: ${plantId}`)
        // const plantDetails = await axios.get(`https://perenual.com/api/plant-details?id=${plantId}&key=${process.env.PLANT_API_KEY}`);
        const plantDetails = await axios.get(`https://perenual.com/api/species/details/${plantId}?key=${process.env.PLANT_API_KEY}`);
        console.log(`plantDetails is: ${plantDetails.data}`)
        res.json(plantDetails.data);
    } catch (err) {
        console.error('Error fetching plant details:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}