import React, { useState, useContext, useCallback, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';
import { generateClient } from 'aws-amplify/api';
import SearchableDropdown from './SearchableDropdown';
import { CircularProgress } from '@mui/material';

const DoubleSearchBox = ({ query, nodeTypeOptions, keywordOptions, title }) => {
  console.log("Props received:", { query, nodeTypeOptions, keywordOptions, title });

  const { setResults, setIsDataLoaded } = useContext(SearchContext);
  const [selectedNodeType, setSelectedNodeType] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = useCallback(async () => {
    if (!selectedNodeType || !selectedKeyword) {
      return;
    }

    setIsLoading(true);
    setIsDataLoaded(false);
    const variables = { nodeType: selectedNodeType, keyword: selectedKeyword };
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
  }, [selectedNodeType, selectedKeyword, query, setIsDataLoaded, setResults]);

  useEffect(() => {
    if (isSubmitted) {
      handleSubmit();
    }
  }, [selectedNodeType, selectedKeyword, isSubmitted, handleSubmit]);

  const handleDropdownChange = (setter, value) => {
    setter(value);
    setIsSubmitted(true); // Set the form as submitted when a dropdown value changes
  };

  return (
    <div className="searchbox-container">
      <div className="searchbox-title mb-3">{title}</div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div style={{ display: 'flex', gap: '10px' }}>
          <div className='dropdown-container' >
						<span className='searchbox-description mt-3'> Find </span>
						<SearchableDropdown 
							options={nodeTypeOptions} 
							value={selectedNodeType} 
							onChange={(value) => handleDropdownChange(setSelectedNodeType, value)}
							width={210}
							showSearchIcon={false}
						/>
						<span className='searchbox-description mt-3'> related to </span>
						<SearchableDropdown 
							options={keywordOptions} 
							value={selectedKeyword} 
							onChange={(value) => handleDropdownChange(setSelectedKeyword, value)}
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
