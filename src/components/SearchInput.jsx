import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput({ value, onChange, onSearchSubmit }) {
    const handleKeyDown = (event) => {
        // console.log("Key pressed:", event.key);
        if (event.key === 'Enter' && value.trim()) {
            event.preventDefault();
            event.stopPropagation();
            // console.log("Enter key pressed, initiating search for:", value.trim());
            onSearchSubmit(value.trim());
        }
    };

    return (
        <TextField
            id="search-text-field"
            variant="standard"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={handleKeyDown}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            fullWidth
            aria-label="Search"
            sx={{
                width: 400, 
                '& .MuiOutlinedInput-root': {
                    height: 50, 
                    marginRight: '10px'
                }
            }}
        />
    );
}

export default SearchInput;
