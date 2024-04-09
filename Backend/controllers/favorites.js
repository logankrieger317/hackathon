const User = require('../models/user');
const { Favorite, favoritesSchema } = require('../models/favorites');
const admin = require('firebase-admin');
const axios = require('axios')

module.exports = {
    index,
    add,
    unfavorite
}

// Shows all of a user's favorite plants
// Pass user email in request body
async function index(req, res) {
    try {
        // const firebaseToken = req.body.firebaseToken;
        // const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
        // const userUID = decodedToken.uid;
        // const user = await User.findOne({ uid: userUID});
        console.log('REQ.query IN /FAV =>', req.query)
        const userEmail = req.query.userEmail;
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const favoritedIds = user.favorites;
        if (favoritedIds.length === 0) {
            return res.status(200).json({ message: "No favorite plants found for the user" });
        }
        const favoritedPlants = await Promise.all(favoritedIds.map(async (favoriteId) => {
            return await Favorite.findById(favoriteId);
        }));
        res.json(favoritedPlants);
    } catch (err) {
        console.error('Error in index favs controller:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}



// REQUIRED: Either plant details according to schema are passed into the body or the plantID is in the body
async function add(req, res) {
    console.log('req.body: ', req.body)
    const userEmail = req.body.email;
    try {
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // checks to see if req.body includes the plant details
        const reqBodyKeys = Object.keys(req.body)
        const favSchemaKeys = Object.keys(favoritesSchema.obj)
        const hasSchemaKeys = favSchemaKeys.every(key => reqBodyKeys.includes(key)) 

        // if plant details not sent in req, then use the plantId that was sent in the request & make an API call to store the data
        if (!hasSchemaKeys) {
            const plantId = req.body.plantId;
            const plantDetails = await axios.get(`https://perenual.com/api/species/details/${plantId}?key=${process.env.PLANT_API_KEY}`);
            console.log('plantDetails.data: ', plantDetails.data)
            const {
                common_name,
                cycle,
                watering,
                sunlight, //array
                hardiness,
                maintenance,
                indoor,
                description,
                default_image, //This will return an object, add ".small_url" to get the pic
                // pruningInfo,
                // wateringInfo,
                // sunlightInfo
            } = plantDetails.data;

            const formattedSunlight = sunlight.join(', '); // converts it from an Array to a string
        
            const newFavorite = new Favorite({
                plantName: common_name,
                cycle,
                watering,
                sunlight: formattedSunlight,
                hardiness: hardiness.min, // Assuming you want to save only the minimum hardiness
                maintenance,
                indoor,
                description,
                plantImage: default_image.small_url
                // pruningInfo,
                // wateringInfo,
                // sunlightInfo
            });
            const savedFavorite = await newFavorite.save();
            user.favorites.push(savedFavorite);
            await user.save();
            return res.status(200).json({ message: "Object favorited successfully!" });
        }

        //This assumes they are favoriting from the detail page where frontend will have access to the needed plant details
        const newFavorite = new Favorite(req.body); 
        const savedFavorite = await newFavorite.save();
        user.favorites.push(savedFavorite);
        await user.save();
        return res.status(200).json({ message: "Object favorited successfully!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to Favorite" });
    }
}

// Takes in user's email and plant's object ID (in request body)
async function unfavorite(req, res) {
    const userEmail = req.body.email;
    try {
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const { plantId } = req.body;
        user.favorites.pull(plantId);
        await user.save();
        await Favorite.findByIdAndDelete(plantId);
        return res.status(200).json({ message: "Plant unfavorited successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to unfavorite" });
    }
}

