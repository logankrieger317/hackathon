const User = require('../models/user');
const axios = require('axios');

module.exports = {
    signup,
    login
}

async function signup(req, res) {
    try {
        const {name, email, password} = req.body
        const userFound = await User.findOne({email})
        if (userFound) {
            return res.status(422).json({error: "Email Already Exists"})
        } else {
            const newUser = new User({
                name,
                email,
                password
            })
            const saveUser = await newUser.save();
            res.status(201).json({message: 'User Successfully Registered!'})
        }
    } catch (err) {
        console.log(`Signup Error: ${err.message}`)
    }
}

async function login(req, res) {
    try {

    } catch (err) {

    }
}