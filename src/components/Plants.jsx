import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

function Plants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch data from the backend and update the plants state
    axios.get('/api/plants/search', {
      params: {
        location: 'yourLocation',
        indoor: 1 // or 0 for outdoor
      }
    })
    .then(response => {
      setPlants(response.data);
    })
    .catch(error => {
      console.error('that did not work:', error);
    });
  }, []);

  return (
    <div className='Plants'>
      {plants.map((plant) => (
        <Box key={plant.id} className='flex max-w-md items-start space-x-4 p-4 bg-white shadow rounded-lg relative border-black border-2'>
          <img className='w-24 h-24 object-cover rounded' src={plant.imageUrl} alt='Plant' />
          <div className='space-y-2 flex-grow flex-shrink min-w-0'>
            <h2 className='text-xl font-semibold'>{plant.name}</h2>
            <p className='text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>{plant.description}</p>
          </div>
          <IconButton className='absolute top-2 right-2 ' aria-label="add to favorites">
            <FavoriteBorderIcon fontSize="large" />
          </IconButton>
        </Box>
      ))}
    </div>
  )
}

export default Plants;