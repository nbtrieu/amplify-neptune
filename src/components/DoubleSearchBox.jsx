import React, { useState, useContext, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';
import SearchableDropdown from './SearchableDropdown';
import { CircularProgress } from '@mui/material';

const DoubleSearchBox = ({ query, nodeTypeOptions, keywordOptions, title, onNodeTypeChange }) => {
  const { setResults, setIsDataLoaded } = useContext(SearchContext);
  const [selectedNodeType, setSelectedNodeType] = useState(nodeTypeOptions[0].value);
  const [selectedKeyword, setSelectedKeyword] = useState(keywordOptions[0].value);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    onNodeTypeChange(selectedNodeType);
  }, [selectedNodeType, onNodeTypeChange]);

  const handleSubmit = async () => {
    setIsLoading(true);
    setIsDataLoaded(false);
    const variables = { keyword: selectedKeyword };
    console.log('Executing query with variables:', variables);

    try {
      const client = generateClient();
      const result = await client.graphql({
        query: query,
        variables: variables
      });
      console.log('Query result:', result);
      setResults(result.data[Object.keys(result.data)[0]]);
    } catch (error) {
      console.error(`Error searching:`, error);
    } finally {
      setIsLoading(false);
      setIsDataLoaded(true);
    }
  };

  useEffect(() => {
    if (selectedNodeType && selectedKeyword) {
      handleSubmit();
    }
  }, [selectedNodeType, selectedKeyword]);

  return (
    <div className="searchbox-container">
      <div className="searchbox-title mb-3">{title}</div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div style={{ display: 'flex', gap: '10px' }}>
          <div className='dropdown-container'>
            <span className='searchbox-description mt-3'> Find </span>
            <SearchableDropdown 
              options={nodeTypeOptions} 
              value={selectedNodeType} 
              onChange={setSelectedNodeType}
              width={210}
              showSearchIcon={false}
            />
            <span className='searchbox-description mt-3'> related to </span>
            <SearchableDropdown 
              options={keywordOptions} 
              value={selectedKeyword} 
              onChange={setSelectedKeyword}
              width={300}
              showSearchIcon={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DoubleSearchBox;
