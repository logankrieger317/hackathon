const User = require('../models/user');
const axios = require('axios');
const { getHardiness, getZipCode } = require('../helperFunctions');

module.exports = {
    search,
    details,
    shortPlants
}


// Returns list of plants based on search parameters
// Takes in user's email & zip code
// or it takes in a plant name if a user searches by name

async function search(req, res) {
    try {
        if (req.query.q) {
            const nameToSearchBy = req.query.q
            const plantList = await axios.get(`https://perenual.com/api/species-list?key=${process.env.PLANT_API_KEY}&q=${nameToSearchBy}`)
            res.json(plantList.data);
        }
        const userEmail = req.query.email;
        let city = req.query.location;
        const zipCode = getZipCode(city)
        const user = await User.findOne({ email: userEmail });
        // find user by email
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        if (!zipCode && !user.location) {
            return res.status(400).json({ error: "Please Select a Location" });
        }

        let tempHardiness = null;
        if (!user.location) {
            // if user doesn't have a location yet, we create it here
            await User.findOneAndUpdate({ email: userEmail }, { location: zipCode });
        } else if (zipCode && zipCode !== user.location) {
            // if user has a location but is searching plants in a different location
            tempHardiness = await getHardiness(zipCode);
        }

        // Convert ZIP to hardiness zone number if user doesn't have one
        if (!user.hardiness) {
            const hardiness = await getHardiness(zipCode);
            await User.findOneAndUpdate({ email: userEmail }, { hardiness: hardiness });
        } else {
        }
        
        let page = 1;
        let apiUrl = `https://perenual.com/api/species-list?key=${process.env.PLANT_API_KEY}&page=${page}`;

        // If tempHardiness is not null, use it. otherwise, use user's hardiness
        const hardinessToUse = tempHardiness !== null ? tempHardiness : user.hardiness;
        apiUrl += `&hardiness=${hardinessToUse}`;
                
        // Check if indoor/outdoor/both
        const inOut = req.query.indoor;
        
        if (inOut === 1) {
            apiUrl += `&indoor=${inOut}`;
        } else if (inOut === 0) {
            // If outdoor is selected, we start the search at page 70 to avoid trees
            page = 70;
            apiUrl += `&indoor=${inOut}`;
        }

        const plantList = await axios.get(apiUrl);
        res.json(plantList.data);
    } catch (err) {
        console.error('Problem at controllers/plants.js search function', err);
        res.status(500).json({ error: 'Problem at controllers/plants.js search function' });
    }
}



// Shows plant details when user clicks on a plant
// Required: plant's id
async function details(req, res) {
    console.log('Plant details controller hit')
    try {
        const plantId = req.params.plantId
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





// TODO: Delete this function
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