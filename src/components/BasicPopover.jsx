import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function BasicPopover({ preview, fullText }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <span>
      <span onClick={handleClick} style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }}>
        {preview}...
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }} style={{ whiteSpace: 'pre-wrap' }}>
          {fullText}
        </Typography>
      </Popover>
    </span>
  );
}
