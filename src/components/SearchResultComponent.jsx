import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import KeywordSearchBox from './KeywordSearchBox';
import ResultsTable from './ResultsTable';

const SearchResultComponent = () => {
  const { isDataLoaded } = useContext(SearchContext);

  return (
    <>
      <KeywordSearchBox />
      {isDataLoaded && <ResultsTable />}
    </>
  );
};

export default SearchResultComponent;
