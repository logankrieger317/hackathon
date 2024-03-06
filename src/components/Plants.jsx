import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Plants({ city }) {
  const plants = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150',
      name: 'Plant 1',
      description: 'This is a description for Plant 1',
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      name: 'Plant 2',
      description: 'This is a description for Plant 2',
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/150',
      name: 'Plant 3',
      description: 'This is a description for Plant 3',
    },
  ];

  // const [plants, setPlants] = useState([]);

//  useEffect(() => {
//   // Fetch data from the backend and update the plants state
//   axios.post('/api/plants/search', {
//     email: 'userEmail', // replace with actual user email
//     location: 'yourLocation',
//     indoor: 1 // or 0 for outdoor
//   })
//   .then(response => {
//     setPlants(response.data);
//   })
//   .catch(error => {
//     console.error('that did not work:', error);
//   });
// }, []);

  return (
    
    <div className='Plants' style={{ backgroundColor: '#cdc9c4', padding:'10px' }} >
    <Box className='header-box m-4 p-4 bg-white shadow rounded-lg'>
        <h1 className='text-2xl font-bold'>Plants for</h1>
        <h2 className='text-xl'>{city}</h2>
      </Box>
      <div className='button-group flex justify-between items-center m-4'>
      <Button variant="contained" className="bg-white hover:bg-yellow-500 focus:bg-yellow-500 text-black hover:text-white focus:text-white">All</Button>
    <Button variant="contained" className="bg-white hover:bg-yellow-500 focus:bg-yellow-500 text-black hover:text-white focus:text-white">Indoor</Button>
    <Button variant="contained" className="bg-white hover:bg-yellow-500 focus:bg-yellow-500 text-black hover:text-white focus:text-white">Outdoor</Button>
    </div>
      {plants.map((plant) => (
        <Box key={plant.id} className='flex max-w-md items-start space-x-4 m-4 p-4 bg-white shadow rounded-lg relative border-black border-2'>
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