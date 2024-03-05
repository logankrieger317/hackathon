const User = require('../models/user');
const admin = require('firebase-admin');

module.exports = {
    signup,
    editProfile
}


async function signup(req, res) {
    try {
        const { firebaseToken } = req.body;
        console.log(`firebaseToken is: ${firebaseToken}`)
        const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
        console.log(`decodedToken is: ${decodedToken}`)
        const { name, email, password } = decodedToken; //TODO: if this info is being sent in req.body , replace decodedToken with req.body. And add logic to make sure req.body.password === user.password
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

async function editProfile(req, res) {
    try {
        const { firebaseToken, name, email, location } = req.body;
        const decodedToken = await admin.auth().verifyIdToken(firebaseToken);
        const userUID = decodedToken.uid;
        const user = await User.findOne({ uid: userUID });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        if (name) {
            await User.findOneAndUpdate({ uid: userUID }, { name: name });
        }
        if (email) {
            await User.findOneAndUpdate({ uid: userUID }, { email: email });
        }
        if (location) {
            await User.findOneAndUpdate({ uid: userUID }, { location: location });
        }

        await user.save();

        res.status(200).json({ message: "Profile updated successfully" });
    } catch (err) {
        console.error("Error editing user profile:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}
