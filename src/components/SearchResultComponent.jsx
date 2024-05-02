import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import ResultsTable from './ResultsTable';

const SearchResultComponent = ({ SearchBoxComponent }) => {
  const { isDataLoaded } = useContext(SearchContext);
//   console.log('isDataLoaded:', isDataLoaded);

  return (
    <>
      <SearchBoxComponent />
      {isDataLoaded ? <ResultsTable /> : <div></div>}
    </>
  );
};

export default SearchResultComponent;
