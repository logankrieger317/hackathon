import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useUser } from './UserContext';
import Box from '@mui/material/Box';



function Favorites() {
  const [favorites, setFavorites] = useState([])
  const { userEmail } = useUser();

console.log('userEmail in Favs =>', userEmail)
useEffect(() => {
  axios.get('http://localhost:3001/favorites', {
    params: {
      userEmail: userEmail
    }
  })
  .then(response => {
    console.log(`Response from /favs: ${response.data}`);
    setFavorites(response.data);
  })
  .catch(error => {
    console.error('error fetching favs list:', error);
  });
}, []);




  return (
    <>
      <div>My Favorites:</div>
      {favorites.map((favorite) => (
        <Box key={favorite.id} className='flex max-w-md items-start space-x-4 m-4 p-4 bg-white shadow-xl rounded-lg relative'>
    {favorite.default_image && favorite.default_image.small_url && (
      <img className='w-24 h-24 object-cover rounded' src={favorite.default_image.small_url} alt='favorite' />
    )}          <div className='space-y-2 flex-grow flex-shrink min-w-0'>
            <h2 className='text-xl font-semibold'>{favorite.plantName}</h2>
            <p className='text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>Cycle: {favorite.cycle}</p>
            <p className='text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>Watering: {favorite.watering}</p>
            <p className='text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>Sunlight: {favorite.sunlight}</p>
          </div>
        </Box>
      ))}
    </>
  )
}

export default Favorites