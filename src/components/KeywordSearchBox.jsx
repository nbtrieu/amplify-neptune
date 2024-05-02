import React, { useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { generateClient } from 'aws-amplify/api';
import keywordOptionsList from '../options/keywordOptions';
import { searchByKeyword } from '../graphql/queries';
import SearchableDropdown from './SearchableDropdown';

import '../index.css';

const KeywordSearchBox = () => {
  const { setResults, setIsDataLoaded } = useContext(SearchContext);
  const [keyword, setKeyword] = useState(keywordOptionsList[0]);

  const handleKeywordChange = (newValue) => {
    setKeyword(newValue);
    handleSubmit();
  };

  const handleSubmit = async () => {
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
      setIsDataLoaded(false);
      console.error('Error searching by keyword:', error);
    }
  };

  return (
    <div className="searchbox-container">
      <div className="searchbox-title">Search by keyword</div>
      <div className="searchbox-description">
        Search for leads based on their area of interests
      </div>
      <form className="search-box" onSubmit={handleSubmit}>
        <SearchableDropdown 
          options={keywordOptionsList} 
          value={keyword} 
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
};

export default KeywordSearchBox;
