import React from 'react'
import Header from './Header'
import Footer from './Footer'
import InfoPop from './InfoPop'
import '../CSS/home.css';
import { Typography } from '@mui/material';
import Cityselector from './Cityselector';
import mapImage from '../images/USA-map-outline.png';


function Home() {
  return (
    <>
    <div className='home'>
      
      <Cityselector/>

      <div className='above-map-text'>
        <Typography variant="body1">
      Please pick the available city closest to you. If your city is not listed, rest assured there are more coming.
      </Typography>
      </div>
          <div className="mapCont">
             <img src={mapImage} alt="Map" style={{width: '100%', height: 'auto'}} />
           </div>
      
      <div className='below-map-text'>
        <Typography variant="body1">
      Please pick the available city closest to you. If your city is not listed, rest assured there are more coming.
      </Typography>

      <InfoPop />
      
      </div>
    </div>
   
     
    </>
  )
}

export default Home