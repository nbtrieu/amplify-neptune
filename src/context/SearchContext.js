import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false); // State to track data loading

  return (
    <SearchContext.Provider value={{ results, setResults, isDataLoaded, setIsDataLoaded }}>
      {children}
    </SearchContext.Provider>
  );
};
