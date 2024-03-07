import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate, useLocation} from 'react-router-dom';
import '../CSS/plants.css'

function Plants() {
  let navigate = useNavigate();
  let location = useLocation();
  const city = location.state.selectedCity;

  const handleClick = (plant) => {
  navigate('/plant-details', { state: { plant } });
}

  const plants = [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/150',
      name: 'Plant 1',
      scienceName: 'Scientific name 1',
      tags: [' tag1 ', ' tag2 '],
      description: 'This is a description for Plant 1',
      cycle: 'Annual',
      hardiness:'5-9',
      watering:'1x per week',
      sunlight:'Full Sun',
      maintenanceLevel:'Easy',
      droughtTolerant:'No',
      invasiveSpecies:'No',
      thrivesIndoors:'Yes',
      thrivesOutdoors:'Yes',
      containerGrowing:'Yes',

    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/150',
      name: 'Plant 2',
      scienceName: 'Scientific name 2',
      tags: [' tag1 ', ' tag2 '],
      description: 'This is a description for Plant 2 ',
      cycle:'Perennial',
      hardiness:'5-9',
      watering:'1x per week',
      sunlight:'Full Sun',
      maintenanceLevel:'Easy',
      droughtTolerant:'No',
      invasiveSpecies:'No',
      thrivesIndoors:'Yes',
      thrivesOutdoors:'Yes',
      containerGrowing:'Yes',

    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/150',
      name: 'Plant 3',
      scienceName: 'Scientific name 3',
      tags: [' tag1 ', ' tag2 '],
      description: 'This is a description for Plant 3',
      cycle:'annual',
      hardiness:'5-9',
      watering:'1x per week',
      sunlight:'Full Sun',
      maintenanceLevel:'Easy',
      droughtTolerant:'No',
      invasiveSpecies:'No',
      thrivesIndoors:'Yes',
      thrivesOutdoors:'Yes',
      containerGrowing:'Yes',

    },
  ];

//   const [plants, setPlants] = useState([]);

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
    <>
    <div className='Plants' style={{ backgroundColor: '#cdc9c4', padding:'10px' }} >
    <Box className='header-box m-4 p-4 flex items-center justify-center flex-col'>
    <h5 className='text-md font-bold text-center mb-2'>Plants for:</h5>
    <div className='w-full border-b-2 text-2xl font-extrabold border-black mx-auto'>
        <h5 className='text-xl text-center mb-2'>{city}</h5>
    </div>
</Box>
  
    
      <div className='button-group flex justify-between items-center m-4'>
      <Button variant="contained" className="plantBtn ">All</Button>
      <Button variant="contained" className="plantBtn ">Indoor</Button>
      <Button variant="contained" className="plantBtn ">Outdoor</Button>
      </div>
      
        {plants.map((plant) => (
        <Box key={plant.id} className='flex max-w-md items-start space-x-4 m-4 p-4 bg-white shadow-xl rounded-lg relative' onClick={() => handleClick(plant)}>
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
    </>
  )
}

export default Plants;