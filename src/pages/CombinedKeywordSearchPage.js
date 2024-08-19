import React, { useState, useEffect } from "react";
import { DoubleSearchBox, SearchResultComponent, ResultsTable } from "../components";
import { SearchProvider } from "../context/SearchContext";
import { searchPersonByKeyword, /* other imports */ } from "../graphql/queries";
import keywordOptionsList from "../options/keywordOptions.js";

const CombinedKeywordSearchPage = () => {
  const [selectedNodeType, setSelectedNodeType] = useState('person');
  const [query, setQuery] = useState(searchPersonByKeyword);

  const nodeTypeOptions = [
    { value: 'person', label: 'people' },
    { value: 'organization', label: 'organizations' },
    { value: 'publication', label: 'publications' },
    { value: 'zymo_product', label: 'Zymo products' },
    { value: 'publication_product', label: 'publication products' }
  ];

  // Map node types to their respective GraphQL queries
  const queryMap = {
    person: searchPersonByKeyword,
    organization: searchPersonByKeyword,
    publication: searchPersonByKeyword,
    zymo_product: searchPersonByKeyword,
    publication_product: searchPersonByKeyword
  };

  // Update the selected query based on the node type
  useEffect(() => {
    setQuery(queryMap[selectedNodeType]);
  }, [selectedNodeType]);

  return (
    <SearchProvider>
      <SearchResultComponent 
        SearchBoxComponent={DoubleSearchBox}
        searchProps={{
          query: query, // Dynamically set query based on selected node type
          nodeTypeOptions: nodeTypeOptions,
          keywordOptions: keywordOptionsList.map(keyword => ({ value: keyword, label: keyword })),
          title: "Search any node types by keyword",
          onNodeTypeChange: setSelectedNodeType // Pass setter to DoubleSearchBox
        }}
        ResultsTableComponent={ResultsTable}
      />
    </SearchProvider>
  );
};

export default CombinedKeywordSearchPage;
