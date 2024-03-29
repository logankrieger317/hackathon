const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { Favorite } = require('../models/favorites');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    uid: String,
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Favorite'
    }],
    location: Number,
    hardiness: Number
})

module.exports = mongoose.model('User', userSchema);
