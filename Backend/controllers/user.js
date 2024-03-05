const User = require('../models/user');
const admin = require('firebase-admin');
const axios = require('axios');

module.exports = {
    signup
    // login
}


async function signup(req, res) {
    try {
        const { firebaseToken } = req.body;
        console.log(`uid is: ${uid}`)
        const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
        console.log(`decodedToken is: ${decodedToken}`)
        const { name, email } = decodedToken;
        const foundEmail = await User.findOne({ email: email})
        if (foundEmail) {
            return res.status(422).json({ error: "Email Already Exists" });
        }
        const userExists = await User.findOne({ uid: decodedToken.uid });
        if (userExists) {
            return res.status(422).json({ error: "User Already Exists" });
        } else {
            // Save user to mongodb
            const newUser = new User({
                name,
                email,
                password,
                uid: decodedToken.uid
            });
            await newUser.save();
            res.status(201).json({ message: 'User Successfully Registered!' });
        }
    } catch (err) {
        console.error(`Signup Error: ${err.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}





// async function signup(req, res) {
//     try {
//         const {name, email, password} = req.body
//         const userFound = await User.findOne({email})
//         if (userFound) {
//             return res.status(422).json({error: "Email Already Exists"})
//         } else {
//             const newUser = new User({
//                 name,
//                 email,
//                 password
//             })
//             const saveUser = await newUser.save();
//             res.status(201).json({message: 'User Successfully Registered!'})
//         }
//     } catch (err) {
//         console.log(`Signup Error: ${err.message}`)
//     }
// }

// async function login(req, res) {
//     try {

//     } catch (err) {

//     }
// }

// async function logout(req, res) {
//     try {

//     } catch (err) {

//     }
// }