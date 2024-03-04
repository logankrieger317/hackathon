const User = require('../models/user');
const Favorite = require('../models/favorites');

module.exports = {
    index,
    add,
    unfavorite
}

// Shows all of a user's favorite plants
// Pass userId in request body
async function index(req, res) {
    console.log('Index favs controller hit')
    try {
        // pull the userId
        const {userId} = req.body
        // findbyId
        const user = await User.findById(userId)
        // check if user is found
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // get user.favorites
        const favoritedIds = user.favorites //returns an array of fav IDs
        // check if user has favorited plants
        if (favoritedIds.length === 0) {
            return res.status(200).json({ message: "No favorite plants found for the user" });
        }
        // retrieve full details of favorited plants
        const favoritedPlants = await Promise.all(favoritedIds.map(async (favoriteId) => {
            return await Favorite.findById(favoriteId);
        }));
        // send that array to frontend
        res.json(favoritedPlants)
    } catch (err) {
        console.error('Error in index favs controller:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}


async function add(req, res) {
    const userId = req.body.userId
    try {
        const newFavorite = new Favorite(req.body)
        const savedFavorite = await newFavorite.save()

        const user = await User.findById(userId)
        user.favorites.push(savedFavorite)
        await user.save()

        return res.status(200).json({message: "Object favorited successfully!"})
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to Favorite"})
    }
}

async function unfavorite(req, res) {
    console.log('unfavorite controller hit')
    try {
        // {favPlantId} = req.body
        // {userId} = req.body
        // user = await User.findbyId(userId)
        // await user.save()
        // Remove this plant from user.favorites
        // plantToRemove = await Favorites.findbyIdandDelete(favPlantId)
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to Unfavorite"})
    }
}