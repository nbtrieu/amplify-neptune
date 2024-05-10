import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import ResultsTable from './ResultsTable';

const SearchResultComponent = ({ SearchBoxComponent, searchProps }) => {
  const { isDataLoaded } = useContext(SearchContext);
//   console.log('isDataLoaded:', isDataLoaded);

  return (
    <>
      <SearchBoxComponent {...searchProps} />
      {isDataLoaded ? <ResultsTable /> : <div></div>}
    </>
  );
};

export default SearchResultComponent;