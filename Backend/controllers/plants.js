const User = require('../models/user');
const axios = require('axios');
const { getHardiness } = require('../helperFunctions');

module.exports = {
    search,
    details,
    shortPlants
}


// Returns list of plants based on search parameters
// Takes in userId and any optional filters from req.body
// Optional: indoor/outdoor, Maybe: poison, edible, sunlight, watering

//TODO: Add ability to search by plant name
async function search(req, res) {
    try {
        console.log(`req.body is: ${req.body}`)
        let inOut = null
        if (req.body.indoor) {
            const inOut = req.body.indoor
            console.log(`inOut is ${inOut}`)
        }
        // grab user Id from req.body
        const userId = req.body.userId
        console.log(`user id is ${userId}`)
        // use userID to get user's location
        const user = await User.findById(userId)
        console.log(`user object is ${user}`)
        const userZip = user.location
        console.log(userZip)
        
        // convert ZIP to hardiness zone number
        if (!user.hardiness) {
            const hardiness = await getHardiness(userZip)
            console.log(`users hardiness score is ${hardiness}`)
            await User.findByIdAndUpdate(userId, { hardiness: hardiness });
            console.log(`user with hardiness is ${user}`)
        } else {
            console.log('User already has hardiness number')
        }

        let apiUrl = `https://perenual.com/api/species-list?key=${process.env.PLANT_API_KEY}&page=1&hardiness=${user.hardiness}`;
        console.log(`api url: ${apiUrl}`)

        //TODO: Write helper function to handle filtered searching
        // check if indoor/outdoor/both
        if (inOut === 1) {
            apiUrl += '&indoor=1'
        } else if (inOut === 0) {
            apiUrl += '&indoor=0'
        } else {
            // if neither indoor or outdoor are selected by user,all indoor&outdoor plants are searched for
        }

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
        const plantDetails = await axios.get(`https://perenual.com/api/species/details/${plantId}?key=${process.env.PLANT_API_KEY}`);
        console.log(`plantDetails is: ${plantDetails.data}`)
        //TODO: ADD A CALL FOR PLANT CARE INFO
        res.json(plantDetails.data);
    } catch (err) {
        console.error('Error fetching plant details:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}


// response.dimensions.max_value

async function shortPlants(req, res) {
    try {
        // Set empty array to store plant list
        const plantList = [];

        // API call to fetch the plant list
        const plantListResponse = await axios.get(`https://perenual.com/api/species-list?key=${process.env.PLANT_API_KEY}&page=1&indoor=0`);

        // Store the list of plants in the empty array
        plantList.push(...plantListResponse.data.data);

        // Initialize another empty array to store short plants
        const shortPlants = [];

        let counter = 1
        // Loop through each plant in the list
        for (const plant of plantList) {
            // Extract the plant's ID
            const plantId = plant.id;

            // API call to fetch plant details by ID
            const plantDetailsResponse = await axios.get(`https://perenual.com/api/species/details/${plantId}?key=${process.env.PLANT_API_KEY}`);
            counter += 1
            console.log(plantDetailsResponse)

            // Extract the plant's height from the details
            // TODO: review this line
            const plantHeight = parseFloat(plantDetailsResponse.data.dimensions.max_value);

            // Check if the plant's height is less than or equal to 4 feet
            if (plantHeight <= 4) {
                // If so, push the plant into the shortPlants array
                shortPlants.push(plant);
            }
        }
        console.log(shortPlants)
        console.log(`COUNTER::: ${counter}`)
        // Send shortPlants array as JSON response
        res.json(shortPlants);
    } catch (err) {
        console.error('Error fetching short plants:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// async function shortPlants (req, res) {
//     try {
//         // set empty array
//         // api call for plant list
//         // store that list in the empty array above
//         // init another empty array const shortPlants = []
//         // loop thru each plant in the list and pull out its id
//             // put that id in a api call for plant details
//             // if that plants height is <= 4 feet push this into shortPlants array
//         // send shortPlants as json response
//     } catch (err) {

//     }
// }