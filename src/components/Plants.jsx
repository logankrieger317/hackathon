import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate, useLocation} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useUser } from './UserContext';
import '../CSS/plants.css'
import { ColorizeSharp } from '@mui/icons-material';

function Plants() {
  let navigate = useNavigate();
  let location = useLocation();
  const [inOut, setInOut] = useState(null)
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useUser();
  const [favoritedPlants, setFavoritedPlants] = useState(user.favorites || []);
  console.log(`user email in plants component: ${user.email}`)
  const city = location.state?.selectedCity || user.location;
  console.log(`city in plants component: ${city}`)
  console.log('user.favorites in Plants.jsx', user.favorites)

  const handleClick = (plant) => {
    console.log('plant in Plants.jsx:', plant)
    navigate('/plant-details', { state: { plant } });
}

  const handleAllClick = () => {
    setInOut(null);
  };

  const handleIndoorClick = () => {
    setInOut(1);
  };

  const handleOutdoorClick = () => {
    setInOut(0);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/plants/search?q=${searchTerm}`);
      setPlants(response.data.data);
    } catch (error) {
      console.error('Failed to fetch plants:', error);
    }
  };

  function handleFavorite(event, plantId) {
    event.stopPropagation();
    axios.post('http://localhost:3001/favorites/add', { plantId: plantId, email: user.email })
      .then(response => {
        console.log('Plant added to favorites:', response.data.message);
        setFavoritedPlants(prevState => [...prevState, plantId]); // Update favorited plants state
      })
      .catch(error => {
        console.error('Error adding plant to favorites:', error);
      });
  }

  function handleUnfavorite(event, plantId) {
    event.stopPropagation();
    console.log('HANDLE UNFAVORITE')
    axios.delete('http://localhost:3001/favorites/unfavorite', { data: { plantId: plantId, email: user.email } })
        .then(response => {
            console.log('Plant removed from favorites:', response.data.message);
            setFavoritedPlants(prevState => prevState.filter(id => id !== plantId)); 
        })
        .catch(error => {
            console.error('Error removing plant from favorites:', error);
        });
}


  // function handleUnfavorite(event, plantId){
  //   event.stopPropagation();
  //   console.log('HANDLE UNFAVORITE')
  //   axios.delete('http://localhost:3001/favorites/unfavorite', {
  //     data: { plantId: plantId, email: user.email }
  //   })
  //   .then(response => {
  //     console.log('Plant removed from favorites:', response.data.message);
  //     setFavoritedPlants(prevState => prevState.filter(id => id !== plantId)); 
  //   })
  //   .catch(error => {
  //     console.error('Error removing plant from favorites:', error);
  //   });
  // }

  useEffect(() => {
    // setFavoritedPlants(prevState => [...prevState, user.favorites])
    // console.log('favoritedPlants in Plants.jsx', favoritedPlants)
    const params = {
      params: {
        email: user.email,
        location: city,
        indoor: inOut
      }
    };
  
    const response = axios.get('http://localhost:3001/plants/search', params)
      .then(response => {
        console.log(`Response from /search: ${response.data.data}`)
        setPlants(response.data.data);
      })
      .catch(error => {
        console.error('that did not work:', error);
      });
  }, [inOut]);
  console.log('PLANT LIST:', plants);

    
  return (
    <>
    <div className='Plants' style={{ backgroundColor: '#cdc9c4', padding:'10px' }} >
    <Box className='header-box m-4 p-4 flex items-center justify-center flex-col'>
      <h5 className='text-md font-bold text-center mb-2'>Plants for:</h5>
      <div className='w-full border-b-2 text-2xl font-extrabold border-black mx-auto'>
          <h5 className='text-xl text-center mb-2'>{city}</h5>
      </div>
    </Box>

    <div className='search-box flex justify-center m-4'>
          <TextField
            id="search-term"
            label="Search plant"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ backgroundColor: 'white', borderRadius: '8px' }}
          />
          <Button variant="contained" onClick={handleSearch}>Search</Button>
        </div>
  
    
      <div className='button-group flex justify-between items-center m-4'>
      <Button variant="contained" className="plantBtn" onClick={handleAllClick}>All</Button>
      <Button variant="contained" className="plantBtn" onClick={handleIndoorClick}>Indoor</Button>
      <Button variant="contained" className="plantBtn" onClick={handleOutdoorClick}>Outdoor</Button>
      </div>
      
        {plants.map((plant) => (
        <Box key={plant.id} className='flex max-w-md items-start space-x-4 m-4 p-4 bg-white shadow-xl rounded-lg relative' onClick={() => handleClick(plant)}>
    {plant.default_image && plant.default_image.small_url && (
      <img className='w-24 h-24 object-cover rounded' src={plant.default_image.small_url} alt='Plant' />
    )}          <div className='space-y-2 flex-grow flex-shrink min-w-0'>
            <h2 className='text-xl font-semibold'>{plant.common_name}</h2>
            <p className='text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>Cycle: {plant.cycle}</p>
            <p className='text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>Watering: {plant.watering}</p>
            <p className='text-gray-500 overflow-hidden overflow-ellipsis whitespace-nowrap'>Sunlight: {plant.sunlight}</p>
          </div>
          {/* <IconButton className='absolute top-2 right-2 ' aria-label="add to favorites" onClick={(event) => handleFavorite(event, plant.id)}> */}
          {/* <IconButton className='absolute top-2 right-2 ' aria-label="add to favorites" onClick={color !== 'red' ? (event) => handleFavorite(event, plant.id) : (event) => handleUnfavorite(event, plant.id)}>
            <FavoriteBorderIcon fontSize="large" style={{ color: favoritedPlants.includes(plant.id) ? 'red' : 'inherit' }} />
          </IconButton> */}
          <IconButton 
            className='absolute top-2 right-2' 
            aria-label="add to favorites" 
            onClick={(event) => favoritedPlants.includes(plant.id) ? handleUnfavorite(event, plant.id) : handleFavorite(event, plant.id)}
          >
            <FavoriteBorderIcon fontSize="large" style={{ color: favoritedPlants.includes(plant.id) ? 'red' : 'inherit' }} />
          </IconButton>

        </Box>
      ))}
    </div>
    </>
  )
}

export default Plants;