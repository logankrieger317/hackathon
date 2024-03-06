import * as React from 'react';
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import '../CSS/infoButton.css'

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'absolute',
    top: -500,
    right: 0,
    left: -250,
    width: 300,
    height: 500,
    zIndex: 5,
    p: 1,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: '12px 12px 150px 25px rgba(0, 0, 0, 0.5)',
  };

  return (
    <>
    <div className='info-button'>
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <button className='green-button ' type="button" onClick={handleClick}>
          i
        </button>
        {open ? (
          <Box sx={styles}>
            Some Copy Here for Hearty Zones
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
    </div>
    </>
  );
}