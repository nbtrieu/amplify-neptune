import React, { useState, useContext, useCallback, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';
import { generateClient } from 'aws-amplify/api';
import keywordOptionsList from '../options/keywordOptions';
import { searchByKeyword } from '../graphql/queries';

import SearchableDropdown from './SearchableDropdown';
import { CircularProgress } from '@mui/material';

const KeywordSearchBox = () => {
  const { setResults, setIsDataLoaded } = useContext(SearchContext);
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    setIsDataLoaded(false);
    try {
      const client = generateClient();
      const result = await client.graphql({
        query: searchByKeyword,
        variables: { keyword }
      });
      setResults(result.data.searchByKeyword);
    } catch (error) {
      console.error('Error searching by keyword:', error);
    } finally {
      setIsLoading(false);
      setIsDataLoaded(true);
    }
  }, [keyword, setIsDataLoaded, setResults]);

  useEffect(() => {
    if (keyword) {
      handleSubmit();
    }
  }, [keyword, handleSubmit]);

  return (
    <div className="searchbox-container">
      <div className="searchbox-title">Search by keyword</div>
      <div className="searchbox-description">Search for leads based on their area of interests</div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <SearchableDropdown 
          options={keywordOptionsList} 
          value={keyword} 
          onChange={setKeyword}
        />
      )}
    </div>
  );
};

export default KeywordSearchBox;
