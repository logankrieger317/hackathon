import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useUser } from './UserContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
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
    <div className='Plants' style={{ backgroundColor: '#cdc9c4', padding:'10px' }} >
      {/* <div className='w-full border-b-2 text-2xl font-extrabold border-black mx-auto'>
          <h5 className='text-xl text-center mb-2'>MY SAVED PLANTS</h5>
      </div> */}
      <Box className='header-box m-4 p-4 flex items-center justify-center flex-col'>
        <div className='w-full border-b-2 text-2xl font-extrabold border-black mx-auto'>
            <h5 className='text-xl text-center mb-2'>MY SAVED PLANTS</h5>
        </div>
      </Box>
      {favorites.map((favorite) => (
        <Box key={favorite.id} className='flex max-w-md items-start space-x-4 m-4 p-4 bg-white shadow-xl rounded-lg relative'>
    {/* {favorite.default_image && favorite.default_image.small_url && ( */}
      <img className='w-24 h-24 object-cover rounded' src={favorite.plantImage} alt='favorite' />
       {/* <img className='w-24 h-24 object-cover rounded' src={favorite.default_image.small_url} alt='favorite' /> */}
    {/*)}*/}          <div className='space-y-2 flex-grow flex-shrink min-w-0'>
            <h2 className='text-xl font-semibold'>{favorite.plantName}</h2>
            <p className='text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>Cycle: {favorite.cycle}</p>
            <p className='text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>Watering: {favorite.watering}</p>
            <p className='text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>Sunlight: {favorite.sunlight}</p>
          </div>
          <IconButton className='absolute top-2 right-2 ' aria-label="add to favorites">
            <FavoriteBorderIcon fontSize="large" style={{ color: 'red' }} />
          </IconButton>
          {/* <IconButton className='absolute top-2 right-2 ' aria-label="add to favorites" onClick={(event) => handleFavorite(event, plant.id)}>
            <FavoriteBorderIcon fontSize="large" style={{ color: favoritedPlants.includes(plant.id) ? 'red' : 'inherit' }} />
          </IconButton> */}
        </Box>
      ))}
    </div>
    </>
  )
}

export default Favorites