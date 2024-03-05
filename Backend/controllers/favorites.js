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
        const firebaseToken = req.body.firebaseToken;
        const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
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


// TODO: update this so that if all the info is not in the body (i.e. user favoriting from list view), 
// TODO: then the plantID is used to make an api call for the details and that is used to populate the favorites schema
// Either plant details according to schema are passed into the body or (once updated) the plantID is in the body
async function add(req, res) {
    const firebaseToken = req.body.firebaseToken;
    try {
        const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
        const userUID = decodedToken.uid;
        const user = await User.findOne({ uid: userUID });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
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


async function unfavorite(req, res) {
    const firebaseToken = req.body.firebaseToken;
    try {
        const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
        const userUID = decodedToken.uid;
        const user = await User.findOne({ uid: userUID });
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

