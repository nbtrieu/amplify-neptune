import React from "react";
import { KeywordSearchBox, SearchResultComponent } from '../components';
import { SearchProvider } from '../context/SearchContext.js';

const KeywordSearchPage = () => {
  return (
    <SearchProvider>
      <SearchResultComponent SearchBoxComponent={KeywordSearchBox} />
    </SearchProvider>
  )
};

export default KeywordSearchPage;
