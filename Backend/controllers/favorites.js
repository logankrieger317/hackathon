const User = require('../models/user');
const Favorite = require('../models/favorites');

module.exports = {
    index,
    add,
    unfavorite
}

//Shows all of a user's favorite plants
async function index(req, res) {
    console.log('Index favs controller hit')
    try {
        
    } catch (err) {
        
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

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to Unfavorite"})
    }
}