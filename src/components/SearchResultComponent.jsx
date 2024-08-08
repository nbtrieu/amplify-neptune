import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const SearchResultComponent = ({ SearchBoxComponent, searchProps, ResultsTableComponent }) => {
  const { isDataLoaded } = useContext(SearchContext);

  return (
    <>
      <SearchBoxComponent {...searchProps} />
      {isDataLoaded ? <ResultsTableComponent /> : <div></div>}
    </>
  );
};

export default SearchResultComponent;