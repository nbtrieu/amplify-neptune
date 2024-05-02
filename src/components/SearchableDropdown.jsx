import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SearchableDropdown({ options, value, onChange }) {
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
                width: 300,
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
        />
    );
}

export default SearchableDropdown;
