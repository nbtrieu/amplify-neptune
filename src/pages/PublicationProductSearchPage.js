import React from 'react';
import { SearchResultComponent } from '../components';
import { SearchProvider } from "../context/SearchContext";
import { searchPublicationsByProduct } from '../graphql/queries';
import publicationProductOptionsList from "../options/publicationProductOptions.js";

const PublicationProductSearchPage = () => {
    return (
        <SearchProvider>
            <SearchResultComponent
                SearchBoxComponent={SelectSearchBox}
                searchProps={{
                query: searchPublicationsByProduct,
                variableKey: "product_name",
                options: publicationProductOptionsList,
                title: "Search by product",
                description: "Find publications that mention:"
                }}
            />
        </SearchProvider>
    )
};

export default PublicationProductSearchPage;
