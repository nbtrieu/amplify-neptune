import React, { useState, useContext, useCallback } from 'react';
import { SearchContext } from '../context/SearchContext';
import { generateClient } from 'aws-amplify/api';
import SearchableDropdown from './SearchableDropdown';
import { CircularProgress } from '@mui/material';

const DoubleSearchBox = ({ queryMap, nodeTypeOptions, keywordOptions, title, onNodeTypeChange }) => { // Add onNodeTypeChange prop
  const { setResults, setIsDataLoaded } = useContext(SearchContext);
  const [selectedNodeType, setSelectedNodeType] = useState(''); // Default to blank
  const [selectedKeyword, setSelectedKeyword] = useState(''); // Default to blank
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async () => {
    if (!selectedNodeType || !selectedKeyword) {
      return;
    }
    
    console.log("Selected keyword:", selectedKeyword);

    setIsLoading(true);
    setIsDataLoaded(false);

    const query = queryMap[selectedNodeType];
    if (!query) {
      console.error(`No query found for node type: ${selectedNodeType}`);
      return;
    }
    const variables = { keyword: selectedKeyword };
    
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
  }, [selectedNodeType, selectedKeyword, queryMap, setIsDataLoaded, setResults]);

  const handleDropdownChange = (setter, option) => {
    setter(option.value); // Set the value for the selected option
    if (setter === setSelectedNodeType && onNodeTypeChange) {
      onNodeTypeChange(option.value); // Notify the parent of the selected node type change
    }
    if (setter === setSelectedKeyword) {
      handleSubmit(); // Automatically submit the form when the keyword is selected
    }
  };

  return (
    <div className="searchbox-container">
      <div className="searchbox-title mb-3">{title}</div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div style={{ display: 'flex' }}>
          <div className='dropdown-container'>
            <span className='searchbox-description mt-3'> Find </span>
            <SearchableDropdown 
              options={nodeTypeOptions} 
              value={selectedNodeType ? nodeTypeOptions.find(option => option.value === selectedNodeType) : null} 
              onChange={(option) => handleDropdownChange(setSelectedNodeType, option)}
              width={210}
              showSearchIcon={false}
              isOptionEqualToValue={(option, value) => option.value === value.value}
            />
            <span className='searchbox-description mt-3'> related to </span>
            <SearchableDropdown 
              options={keywordOptions} 
              value={selectedKeyword ? keywordOptions.find(option => option.value === selectedKeyword) : null}
              onChange={(option) => handleDropdownChange(setSelectedKeyword, option)}
              width={300}
              showSearchIcon={false}
              isOptionEqualToValue={(option, value) => option.value === value.value}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DoubleSearchBox;
