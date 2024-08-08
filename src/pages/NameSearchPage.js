import React from 'react';
import { SearchResultComponent, ResultsTable } from '../components';
import { SearchProvider } from "../context/SearchContext";
import { searchByName } from '../graphql/queries';
import { NameSearchBox } from '../components';

const NameSearchPage = () => {
    return (
        <SearchProvider>
            <SearchResultComponent 
                SearchBoxComponent={NameSearchBox}
                searchProps={{
                    query: searchByName,
                    variableKey: "name",
                    options: [], // Empty because not a select input
                    title: "Search by name",
                    description: "Search for leads based on name",
                }}
                ResultsTableComponent={ResultsTable}
            />
        </SearchProvider>
    );
};

export default NameSearchPage;
