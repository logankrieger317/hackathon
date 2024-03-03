const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Favorite = require('./favorites');

const userSchema = new Schema({
    name: String,
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Favorite'
    }],
    location: Number,
    hardiness: Number
})

// TODO: unccomment
// module.exports = mongoose.model('User', userSchema);
