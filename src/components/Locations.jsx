import React, { useEffect, useState } from 'react'
import Cityselector from './Cityselector'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';

function Locations() {
  const [selectedCity, setSelectedCity] = useState(null);

  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.state?.selectedCity) {
      setSelectedCity(location.state.selectedCity);
    }
  }, [location]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    console.log(city)
  }

  const handleClick = () => {
    navigate('/plants', { state: { selectedCity } });
  }

  return (
    <div className='locations flex flex-col justify-center content-center bg-skyline h-[73vh] bg-cover bg-center bg-no-repeat border-t-2 border-gray-500'>
      <div className='flex flex-col justify-center content-center items-top h-full'>
        <Box className='flex flex-col justify-center content-center m-4 p-4 bg-white shadow-lg rounded-lg'>
          <h2>{selectedCity}</h2>
          <p>Pass In Heartiness Zone</p>
        </Box>
      <div className='flex flex-col justify-center content-center items-center'>
        <Button variant="contained" onClick={handleClick}>Go to Plants</Button>
      </div>
      </div>
    </div>
  )
}

export default Locations