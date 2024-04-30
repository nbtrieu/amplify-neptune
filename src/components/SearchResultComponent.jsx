import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import KeywordSearchBox from './KeywordSearchBox';
import ResultsTable from './ResultsTable';

const SearchResultComponent = () => {
  const { isDataLoaded } = useContext(SearchContext);
//   console.log('isDataLoaded:', isDataLoaded);

  return (
    <>
      <KeywordSearchBox />
      {isDataLoaded ? <ResultsTable /> : <div></div>}
    </>
  );
};

export default SearchResultComponent;
