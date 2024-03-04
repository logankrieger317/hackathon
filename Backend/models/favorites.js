const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
    plantName: String,
    cycle: String,
    watering: String,
    sunlight: String,
    hardiness: Number,
    maintenance: String,
    indoor: Boolean,
    description: String,
    pruningInfo: String,
    wateringInfo: String,
    sunlightInfo: String
})

module.exports = mongoose.model('Favorites', favoritesSchema);
