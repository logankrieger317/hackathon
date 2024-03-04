const User = require('../models/user');

// Create a new user document without specifying the hardiness field
const newUser = new User({
  name: 'John Doe',
  location: 90210
});

// Save the user document to the database
newUser.save().then((user) => {
  console.log('User created:', user);
}).catch((error) => {
  console.error('Error creating test user:', error);
});
