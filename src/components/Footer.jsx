import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import '../CSS/footer.css'

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <>
    <div className="footer flex justify-center align-middle">
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction className='footer-icons' label="Locations" icon={<LanguageOutlinedIcon />} />
        <BottomNavigationAction className='footer-icons' label="Plants" icon={<EnergySavingsLeafOutlinedIcon />} />
        <BottomNavigationAction className='footer-icons' label="My Profile" icon={<AccountCircleOutlinedIcon />} />
        <BottomNavigationAction className='footer-icons' label="Favorites" icon={<FavoriteBorderOutlinedIcon />} />
        <BottomNavigationAction className='footer-icons' label="Settings" icon={<SettingsOutlinedIcon />} />
      </BottomNavigation>
    </Box>
    </div>
    </>
  );
}