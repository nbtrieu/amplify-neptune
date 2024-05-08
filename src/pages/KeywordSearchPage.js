import React from "react";
import { SelectSearchBox, SearchResultComponent } from '../components';
import { SearchProvider } from '../context/SearchContext.js';
import { searchByKeyword } from "../graphql/queries.js";
import keywordOptionsList from "../options/keywordOptions.js";

const KeywordSearchPage = () => {
  return (
    <SearchProvider>
      <SearchResultComponent
        SearchBoxComponent={SelectSearchBox}
        searchProps={{
          query: searchByKeyword,
          variableKey: "keyword",
          options: keywordOptionsList,
          title: "Search by keyword",
          description: "Search for leads based on area of interests"
        }}
      />
    </SearchProvider>
  )
};

export default KeywordSearchPage;
