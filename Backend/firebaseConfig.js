const { initializeApp } = require('firebase-admin/app');

const app = initializeApp({
    credential: process.env.FIREBASE_SERVICE_ACCOUNT,
    databaseURL: process.env.FIREBASE_URL
});