import React, { useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { generateClient } from 'aws-amplify/api';
import keywordOptionsList from '../options/keywordOptions';
import { searchByKeyword } from '../graphql/queries';

import '../index.css';

const KeywordSearchBox = () => {
  const { setResults, setIsDataLoaded } = useContext(SearchContext);
  const [keyword, setKeyword] = useState(keywordOptionsList[0]);

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = async (event) => {
    setIsDataLoaded(false); // Reset loading state
    event.preventDefault();
    try {
      const client = generateClient()
      const result = await client.graphql({
        query: searchByKeyword,
        variables: { keyword: keyword }
      });
      setResults(result.data.searchByKeyword);
      setIsDataLoaded(true);
      console.log(result.data.searchByKeyword);
    } catch (error) {
      setIsDataLoaded(false); // Reset loading state
      console.error('Error searching by keyword:', error);
    }
  };

  return (
    <div className="keyword-container">
      <div className="keyword-title">Search by keyword</div>
      <div className="keyword-description">
        Search for leads based on their area of interests
      </div>
      <form className="keyword-search-box" onSubmit={handleSubmit}>
        <select className="keyword-select-input" value={keyword} onChange={handleKeywordChange}>
          {keywordOptionsList.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit" className="keyword-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default KeywordSearchBox;
