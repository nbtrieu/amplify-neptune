import React, { createContext, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getAllZymoWebProducts } from '../graphql/queries.js';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false); // State to track data loading

  // to serve product view on page load:
  const loadZymoWebProducts = async () => {
    try {
      const client = generateClient();
      const result = await client.graphql({ query: getAllZymoWebProducts });
      setResults(result.data[Object.keys(result.data)[0]]);
      setIsDataLoaded(true);
    } catch (error) {
      console.error("Error loading Zymo Web Products:", error);
    }
  };

  return (
    <SearchContext.Provider value={{ results, setResults, isDataLoaded, setIsDataLoaded, loadZymoWebProducts }}>
      {children}
    </SearchContext.Provider>
  );
};
