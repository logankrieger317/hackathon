import React from 'react'
import Header from './Header'
import Footer from './Footer'
import InfoPop from './InfoPop'
import { Typography } from '@mui/material';
import Cityselector from './Cityselector';
import mapImage from '../images/USA-map-outline.png';


function Home() {
  return (
    <>
    <div className='home flex flex-col items-center justify-center mb-2.5' style={{backgroundColor: '#cdc9c4', height: '73vh'}}>
      
      <Cityselector/>

      <div className='above-map-text bg-white text-black flex justify-around items-center mt-3 mb-3  p-2.5 rounded-lg' style={{width:'70vw'}}>
        <Typography variant="body1">
      Please pick the available city closest to you. If your city is not listed, rest assured there are more coming.
      </Typography>
      </div>
          <div className="mapCont">
             <img id='map' src={mapImage} alt="Map" style={{width: '100%', height: 'auto'}} />
           </div>
      
      <div className='below-map-text bg-white text-black flex justify-around items-center mt-3 mb-3 p-2.5 rounded-lg' style={{width:'70vw'}}>
        <Typography variant="body1">
      Click on the information icon to learn more about Plant Hardiness Zones and how they affect your garden.
      </Typography>

      </div>

      <div className='flex w-screen justify-end mr-28'>
      <InfoPop className='float-right'/>
      </div>
    </div>
   
     
    </>
  )
}

export default Home