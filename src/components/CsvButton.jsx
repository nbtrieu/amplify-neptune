import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';

const CsvButton = ({ onClick }) => {
  return (
    <Tooltip title="Download CSV" placement="top" arrow>
      <button className="button" onClick={onClick}>
        <DownloadIcon style={{ color: 'white' }} />
      </button>
    </Tooltip>
  );
};

export default CsvButton;
