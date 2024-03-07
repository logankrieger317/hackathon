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

function getZipCode(cityName) {
    const cities = {
      'New York, NY': '10001',
      'Austin, TX': '73301',
      'Chicago, IL': '60601',
      'San Francisco, CA': '94101',
      'Seattle, WA': '98101',
      'Los Angeles, CA': '90001',
      'Boston, MA': '02101',
      'Portland, OR': '97201',
      'Denver, CO': '80201',
      'Dallas, TX': '75201'
    };
  
    return cities[cityName] || null; // Return the zip code or null if city name is not found
  }
  

module.exports = {
    removeLetter,
    getHardiness,
    getZipCode
};
