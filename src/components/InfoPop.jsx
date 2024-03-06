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
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
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