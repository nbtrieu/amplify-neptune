import React, { useState } from "react";
import { DoubleSearchBox, SearchResultComponent, ResultsTable, PublicationTable } from "../components";
import { SearchProvider } from "../context/SearchContext";

import { 
  searchByKeyword,
  searchOrganizationsByKeyword,
  searchPublicationsByKeyword,
  searchPublicationProductsByKeyword,
  searchMarketingCampaignsByKeyword
} from "../graphql/queries.js";

import keywordOptionsList from "../options/keywordOptions.js";

const CombinedKeywordSearchPage = () => {
  const [selectedNodeType, setSelectedNodeType] = useState('');

  const nodeTypeOptions = [
    { value: 'person', label: 'people' },
    { value: 'organization', label: 'organizations' },
    { value: 'publication', label: 'publications' },
    { value: 'zymo_product', label: 'Zymo products' },
    { value: 'publication_product', label: 'publication products' },
    { value: 'marketing_campaign', label: 'marketing campaigns' }
  ];

	const queryMap = {
    person: searchByKeyword,
    organization: searchOrganizationsByKeyword,
    publication: searchPublicationsByKeyword,
    zymo_product: searchByKeyword,
    publication_product: searchPublicationProductsByKeyword,
    marketing_campaign: searchMarketingCampaignsByKeyword
  };

  const handleNodeTypeChange = (value) => {
    setSelectedNodeType(value);
  };
	
	return (
		<SearchProvider>
			<SearchResultComponent 
				SearchBoxComponent={DoubleSearchBox}
				searchProps={{
					queryMap: queryMap,  // Pass the entire queryMap
          nodeTypeOptions: nodeTypeOptions,
          keywordOptions: keywordOptionsList.map(keyword => ({ value: keyword, label: keyword })),
          title: "Search any node type by keyword",
          onNodeTypeChange: handleNodeTypeChange
				}}
				ResultsTableComponent={selectedNodeType === 'publication' ? PublicationTable : ResultsTable}
			/>
		</SearchProvider>
	)
};

export default CombinedKeywordSearchPage;
