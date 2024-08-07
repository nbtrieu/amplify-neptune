import React, { useState, useContext, useCallback, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';
import { generateClient } from 'aws-amplify/api';

import SearchableDropdown from './SearchableDropdown';
import { CircularProgress } from '@mui/material';

const SearchBox = ({ query, variableKey, options, title, description }) => {
  console.log("Props received:", { query, variableKey, options, title, description });

  const { setResults, setIsDataLoaded } = useContext(SearchContext);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    setIsDataLoaded(false);
    const variables = { [variableKey]: value }; // Assign variables to easily log it
    console.log('Executing query with variables:', variables);

    try {
      const client = generateClient();
      const result = await client.graphql({
        query: query,
        variables: variables
      });
      console.log('Query result:', result);
      setResults(result.data[Object.keys(result.data)[0]]); // Dynamically access the first property
    } catch (error) {
      console.error(`Error searching:`, error);
    } finally {
      setIsLoading(false);
      setIsDataLoaded(true);
    }
}, [value, query, variableKey, setIsDataLoaded, setResults]);

  useEffect(() => {
    if (value) {
      handleSubmit();
    }
  }, [value, handleSubmit]);

  return (
    <div className="searchbox-container">
      <div className="searchbox-title">{title}</div>
      <div className="searchbox-description">{description}</div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <SearchableDropdown 
          options={options} 
          value={value} 
          onChange={setValue}
        />
      )}
    </div>
  );
};

export default SearchBox;
