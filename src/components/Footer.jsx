import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';


export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div className="footer flex mt-2 justify-center align-middle">
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Link to="/locations"> 
              <BottomNavigationAction className='footer-icons' label="Locations" icon={<LanguageOutlinedIcon />} />
            </Link>
            <Link to="/plants"> 
              <BottomNavigationAction className='footer-icons' label="Plants" icon={<EnergySavingsLeafOutlinedIcon />} />
            </Link>
            <Link to="/profile"> 
              <BottomNavigationAction className='footer-icons' label="My Profile" icon={<AccountCircleOutlinedIcon />} />
            </Link>
            <Link to="/favorites"> 
              <BottomNavigationAction className='footer-icons' label="Favorites" icon={<FavoriteBorderOutlinedIcon />} />
            </Link>
            {/* <Link to="/settings"> 
              <BottomNavigationAction className='footer-icons' label="Settings" icon={<SettingsOutlinedIcon />} />
            </Link> */}
          </BottomNavigation>
        </Box>
      </div>
    </>
  );
}
