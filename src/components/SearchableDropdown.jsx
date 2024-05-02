import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SearchableDropdown({ options, value, onChange }) {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action to avoid submitting the form traditionally
            onChange(value); // Trigger the onChange function which should be linked to handling the submission
        }
    };

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            value={value}
            onChange={(event, newValue) => {
                onChange(newValue);
            }}
            ListboxProps={{
                style: {
                    maxHeight: '300px', // Controls the height of the dropdown list directly
                    overflow: 'auto' // Adds a scrollbar when content exceeds the max height
                }
            }}
            sx={{
                width: 400,
                '& .MuiAutocomplete-option': {
                    height: '36px', // Ensure this is a string with 'px' to enforce CSS correctly
                    paddingTop: 0,
                    paddingBottom: 0,
                },
                '& .MuiOutlinedInput-root': {
                    height: 50, // Adjust this value to change the input height
                    marginRight: '10px'
                }
            }}
            renderInput={(params) => (
                <TextField 
                    {...params} 
                    label="Choose an option" 
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            )}
            autoComplete
            clearOnEscape
            fullWidth
            onKeyDown={handleKeyDown}
        />
    );
}

export default SearchableDropdown;
