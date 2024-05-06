import React from "react";
import { SearchBox, SearchResultComponent, OrganizationSearchBox } from '../components';
import { SearchProvider } from "../context/SearchContext";
import { searchByOrganization } from '../graphql/queries';
import organizationOptionsList from '../options/organizationOptions';

const OrganizationSearchPage = () => {
  // preconfigure SearchBox component with necessary props
  // const OrganizationSearchBox = () => (
  //   <SearchBox 
  //     query={searchByOrganization}
  //     variableKey="organization"
  //     options={organizationOptionsList}
  //     title="Search by organization"
  //     description="Search for an organization's members"
  //   />
  // );

  return (
    <SearchProvider>
      <SearchResultComponent 
        SearchBoxComponent={SearchBox} 
        searchProps={{
          query: searchByOrganization,
          variableKey: "organization",
          options: organizationOptionsList,
          title: "Search by Organization",
          description: "Search for an organization's members"
        }}
      />
      {/* <SearchResultComponent SearchBoxComponent={OrganizationSearchBox} /> */}
    </SearchProvider>
  );
};

export default OrganizationSearchPage;
