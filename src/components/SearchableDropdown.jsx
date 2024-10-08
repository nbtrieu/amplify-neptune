import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SearchableDropdown({ options, value, onChange, width = 400, variant = "standard", showSearchIcon = true }) {
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
            isOptionEqualToValue={(option, value) => option.value === value.value} // Ensure equality check
            sx={{
                width: width,
                '& .MuiAutocomplete-option': {
                    height: '36px',
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
                    variant={variant}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: showSearchIcon ? (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ) : null,
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
