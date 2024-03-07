import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

function PlantDetail() {
  let location = useLocation();
  const [plant, setPlant] = useState([])
  const plantId = location.state.plant.id;
  console.log('plant id is: ', plantId)
  

  //TODO: Figure out why this useEffect won't run
  useEffect(() => {
    console.log('useEffect triggered')
    const fetchPlantData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/plants/details/${plantId}`);
        setPlant(response.data);
        console.log('RESPONSE.DATA: ', response.data)
      } catch (error) {
        console.error('Failed to fetch plant data:', error);
      }
    };
    
    fetchPlantData();
  }, []);

  return (
    <div className='flex flex-col justify-center content-center items-center' style={{backgroundColor: '#cdc9c4'}}>
      <Box className='m-4 p-4 bg-white shadow rounded-lg'>
        <div>
          <img className='w-full h-64 object-cover mt-4 rounded' src={plant.imageUrl} alt={plant.name} />
        </div>
      </Box>
      <Box className='m-4 p-4 bg-white shadow rounded-lg'>
        <div>
          <h1 className='text-2xl font-bold'>{plant.name}</h1>
          <p>{plant.scienceName}</p>
          <p>{plant.tags ? plant.tags.join(', ') : ''}</p>
        </div>
      </Box>
      <Box className='m-4 p-4 bg-white shadow rounded-lg'>
        <div>
          <p className='text-xl mt-4'>{plant.description}</p>
          <p>Cycle: {plant.cycle}</p>
          <p>Hardiness Zone: {plant.hardiness}</p>
          <p>Watering: {plant.watering}</p>
          <p>Sunlight: {plant.sunlight}</p>
          <p>Maintenance Level: {plant.maintenanceLevel}</p>
          <p>Drought Tolerant: {plant.droughtTolerant}</p>
          <p>Invasive Species: {plant.invasiveSpecies}</p>
          <p>Thrives Indoors: {plant.thrivesIndoors}</p>
          <p>Thrives Outdoors: {plant.thrivesOutdoors}</p>
          <p>Container Growing: {plant.containerGrowing}</p>
        </div>
      </Box>
    </div>
  );
}

export default PlantDetail;