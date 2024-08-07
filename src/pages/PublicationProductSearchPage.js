import React from 'react';
import { SelectSearchBox, SearchResultComponent } from '../components/index.js';
import { SearchProvider } from "../context/SearchContext.js";
import { searchPublicationsByProduct } from '../graphql/queries.js';
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
                description: "Find all publications that mention:"
                }}
            />
        </SearchProvider>
    )
};

export default PublicationProductSearchPage;
