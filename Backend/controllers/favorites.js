const User = require('../models/user');
const Favorite = require('../models/favorites');
const admin = require('firebase-admin');

module.exports = {
    index,
    add,
    unfavorite
}

// Shows all of a user's favorite plants
// Pass userId in request body

async function index(req, res) {
    try {
        const idToken = req.body.idToken;
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const userUID = decodedToken.uid;
        const user = await User.findOne({ uid: userUID});
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


// async function index(req, res) {
//     try {
//         // pull the userId
//         const {userId} = req.body
//         // findbyId
//         const user = await User.findById(userId)
//         // check if user is found
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }
//         // get user.favorites
//         const favoritedIds = user.favorites //returns an array of fav IDs
//         // check if user has favorited plants
//         if (favoritedIds.length === 0) {
//             return res.status(200).json({ message: "No favorite plants found for the user" });
//         }
//         // retrieve full details of favorited plants
//         const favoritedPlants = await Promise.all(favoritedIds.map(async (favoriteId) => {
//             return await Favorite.findById(favoriteId);
//         }));
//         // send that array to frontend
//         res.json(favoritedPlants)
//     } catch (err) {
//         console.error('Error in index favs controller:', err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// TODO: update this so that if all the info is not in the body (i.e. user favoriting from list view), 
// TODO: then the plantID is used to make an api call for the details and that is used to populate the favorites schema
// Either plant details according to schema are passed into the body or (once updated) the plantID is in the body

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

// Send userId and plantId in request body
async function unfavorite(req, res) {
    try {
        const { plantId, userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Remove the plant from user's favorites
        user.favorites.pull(plantId);
        await user.save();
        // Delete the plant from mongo database
        await Favorite.findByIdAndDelete(plantId);
        return res.status(200).json({ message: "Plant unfavorited successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to unfavorite" });
    }
}
