import React from "react";
import { SearchBox, SearchResultComponent } from '../components';
import { SearchProvider } from "../context/SearchContext";
import { searchByOrganization } from '../graphql/queries';
import organizationOptionsList from '../options/organizationOptions';

const OrganizationSearchPage = () => {
  return (
    <SearchProvider>
      <SearchResultComponent 
        SearchBoxComponent={SearchBox} 
        searchProps={{
          query: searchByOrganization,
          variableKey: "organization",
          options: organizationOptionsList,
          title: "Search by organization",
          description: "Search for an organization's members"
        }}
      />
    </SearchProvider>
  );
};

export default OrganizationSearchPage;
