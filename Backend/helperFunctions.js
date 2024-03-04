const axios = require('axios');

// Hardiness API returns zones like '7a' but plant API only takes in numbers,
// this function strips the letter
function removeLetter(hardinessZone) {
    const match = hardinessZone.match(/\d+/);
    return match ? parseInt(match[0]) : null;
}

async function getHardiness(userZip) {
    try {
        const response = await axios.get(`https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${userZip}`, {
            headers: {
                'X-RapidAPI-Key': process.env.HARDINESS_API_KEY,
                'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com'
            }
        });

        const hardinessNum = removeLetter(response.data.hardiness_zone);

        return hardinessNum;
    } catch (error) {
        console.error('Error fetching hardiness:', error);
        throw error;
    }
}

module.exports = {
    removeLetter,
    getHardiness
};
