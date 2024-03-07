import React from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

function PlantDetail() {
  let location = useLocation();
  const plant = location.state.plant;

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