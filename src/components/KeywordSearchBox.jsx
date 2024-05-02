import React, { useState, useContext, useEffect } from 'react';
import { CircularProgress } from '@mui/material'; // Import MUI loading spinner
import { SearchContext } from '../context/SearchContext';
import { generateClient } from 'aws-amplify/api';
import keywordOptionsList from '../options/keywordOptions';
import { searchByKeyword } from '../graphql/queries';
import SearchableDropdown from './SearchableDropdown';

import '../index.css';

const KeywordSearchBox = () => {
  const { setResults, setIsDataLoaded } = useContext(SearchContext);
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const handleKeywordChange = (newValue) => {
    setKeyword(newValue);
  };

  useEffect(() => {
    if (keyword) {
      handleSubmit(); // This gets called whenever `keyword` changes and is not empty
    }
  }, [keyword]); // Re-run the effect when `keyword` changes

  const handleSubmit = async () => {
    setIsLoading(true); // Set loading to true
    setIsDataLoaded(false);
    try {
      const client = generateClient();
      const result = await client.graphql({
        query: searchByKeyword,
        variables: { keyword: keyword }
      });
      setResults(result.data.searchByKeyword);
      setIsDataLoaded(true);
    } catch (error) {
      console.error('Error searching by keyword:', error);
    } finally {
      setIsLoading(false); // Set loading to false when done
    }
  };

  return (
    <div className="searchbox-container">
      <div className="searchbox-title">Search by keyword</div>
      <div className="searchbox-description">
        Search for leads based on their area of interests
      </div>
      {isLoading ? (
        <CircularProgress /> // Display the loading indicator when loading
      ) : (
        <SearchableDropdown 
          options={keywordOptionsList} 
          value={keyword} 
          onChange={handleKeywordChange}
        />
      )}
    </div>
  );
};

export default KeywordSearchBox;
