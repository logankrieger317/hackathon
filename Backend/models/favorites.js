const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
    plantName: String,
    plantId: Number,
    cycle: String,
    plantImage: String,
    watering: String,
    sunlight: String,
    hardiness: Number,
    maintenance: String,
    indoor: Boolean,
    description: String,
    pruningInfo: String,
    wateringInfo: String,
    sunlightInfo: String
});

const Favorite = mongoose.model('Favorites', favoritesSchema);

module.exports = {
    favoritesSchema: favoritesSchema,
    Favorite: Favorite
};


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const favoritesSchema = new Schema({
//     plantName: String,
//     cycle: String,
//     watering: String,
//     sunlight: String,
//     hardiness: Number,
//     maintenance: String,
//     indoor: Boolean,
//     description: String,
//     pruningInfo: String,
//     wateringInfo: String,
//     sunlightInfo: String
// })

// // module.exports = favoritesSchema;
// module.exports = mongoose.model('Favorites', favoritesSchema);