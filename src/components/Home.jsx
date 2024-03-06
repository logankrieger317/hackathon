import React from 'react'
import Header from './Header'
import Footer from './Footer'
import InfoPop from './InfoPop'
import '../CSS/home.css';
import { Select, MenuItem } from '@mui/material';
import { Typography } from '@mui/material';
import Cityselector from './Cityselector';




function Home() {
  return (
    <>
      <Header/>
    <div className='home'>
      <Cityselector/>
        <div>

       <div className='above-map-text'>
        <Typography variant="body1">
      Please pick the available city closest to you. If your city is not listed, rest assured there are more coming.
      </Typography>
      </div>
      </div>

      <div className="container">
        <div className=" mapCont mx-auto max-w-7xl sm:px-6 lg:px-8 h-fit  ">
          {/* holds map image */}
        </div>
      
        </div>
      <div className='below-map-text'>
        <Typography variant="body1">
      Please pick the available city closest to you. If your city is not listed, rest assured there are more coming.
      </Typography>
      </div>
      <InfoPop/>

      <Footer/>
     </div>
    </>
  )
}

export default Home