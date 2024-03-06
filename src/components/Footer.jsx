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
        <BottomNavigationAction label="Locations" icon={<LanguageOutlinedIcon />} />
        <BottomNavigationAction label="Plants" icon={<EnergySavingsLeafOutlinedIcon />} />
        <BottomNavigationAction label="My Profile" icon={<AccountCircleOutlinedIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteBorderOutlinedIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsOutlinedIcon />} />
      </BottomNavigation>
    </Box>
    </div>
    </>
  );
}