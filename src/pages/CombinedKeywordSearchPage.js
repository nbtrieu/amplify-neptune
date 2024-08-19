import React from "react";
import { DoubleSearchBox, SearchResultComponent, ResultsTable } from "../components";
import { SearchProvider } from "../context/SearchContext";
import { searchByKeyword } from "../graphql/queries.js";
import keywordOptionsList from "../options/keywordOptions.js";

const CombinedKeywordSearchPage = () => {
  const nodeTypeOptions = [
    { value: 'person', label: 'people' },
    { value: 'organization', label: 'organizations' },
    { value: 'publication', label: 'publications' },
    { value: 'zymo_product', label: 'Zymo products' },
    { value: 'publication_product', label: 'publication products' }
  ];

	const queryMap = {
    person: searchByKeyword,
    organization: searchByKeyword,
    publication: searchByKeyword,
    zymo_product: searchByKeyword,
    publication_product: searchByKeyword
  };
	
	return (
		<SearchProvider>
			<SearchResultComponent 
				SearchBoxComponent={DoubleSearchBox}
				searchProps={{
					queryMap: queryMap,  // Pass the entire queryMap
          nodeTypeOptions: nodeTypeOptions,
          keywordOptions: keywordOptionsList.map(keyword => ({ value: keyword, label: keyword })),
          title: "Search any node type by keyword"
				}}
				ResultsTableComponent={ResultsTable}
			/>
		</SearchProvider>
	)
};

export default CombinedKeywordSearchPage;