import React, { useState, useContext, useCallback } from 'react';
import { SearchContext } from '../context/SearchContext';
import { capitalizeWords } from '../utils/helpers';
import { generateClient } from 'aws-amplify/api';
import SearchInput from './SearchInput';
import { CircularProgress } from '@mui/material';

const NameSearchBox = ({ query, variableKey, title, description, onSearchSubmit }) => {
    const { setResults, setIsDataLoaded } = useContext(SearchContext);
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = useCallback(async () => {
        if (!value) return; // Prevent search with empty input
        setIsLoading(true);
        setIsDataLoaded(false);
        
        const formattedValue = capitalizeWords(value); // Capitalize words
        const variables = { [variableKey]: formattedValue };
        console.log(variables);

        try {
            const client = generateClient();
            const result = await client.graphql({
                query: query,
                variables: variables
            });
            setResults(result.data[Object.keys(result.data)[0]]);
        } catch (error) {
            console.error(`Error searching:`, error);
        } finally {
            setIsLoading(false);
            setIsDataLoaded(true);
        }
    }, [value, query, variableKey, setResults, setIsDataLoaded]);

    // Update to handle Enter key submission through the SearchInput
    const handleSearchSubmit = useCallback((searchValue) => {
        setValue(capitalizeWords(searchValue)); // Update value with capitalized words and trigger search
        handleSubmit(); // Call handleSubmit directly
    }, [handleSubmit]);

    return (
        <div className="searchbox-container">
            <div className="searchbox-title">{title}</div>
            <div className="searchbox-description">{description}</div>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <SearchInput
                    value={value}
                    onChange={setValue}
                    onSearchSubmit={handleSearchSubmit}
                />
            )}
        </div>
    );
};

export default NameSearchBox;
