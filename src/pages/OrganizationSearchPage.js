import React from "react";
import { SelectSearchBox, SearchResultComponent, ResultsTable } from '../components';
import { SearchProvider } from "../context/SearchContext";
import { searchByOrganization } from '../graphql/queries';
import organizationOptionsList from '../options/organizationOptions';

const OrganizationSearchPage = () => {
  return (
    <SearchProvider>
      <SearchResultComponent 
        SearchBoxComponent={SelectSearchBox} 
        searchProps={{
          query: searchByOrganization,
          variableKey: "organization",
          options: organizationOptionsList,
          title: "Search by organization",
          description: "Search for members of an organization"
        }}
        ResultsTableComponent={ResultsTable}
      />
    </SearchProvider>
  );
};

export default OrganizationSearchPage;
