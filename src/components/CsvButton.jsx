import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';

const styles = {
  button: {
    backgroundColor: '#6FC2A9',
    border: 'none',
    borderRadius: '20%',
    padding: '10px',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: '#5eb89a', // Slightly darker on hover
    }
  },
  // Style for the Tooltip component can be added here if needed
};

const CsvButton = ({ onClick }) => {
  return (
    <Tooltip title="Download CSV" placement="top" arrow>
      <button style={styles.button} onClick={onClick}>
        <DownloadIcon style={{ color: 'white' }} />
      </button>
    </Tooltip>
  );
};

export default CsvButton;
