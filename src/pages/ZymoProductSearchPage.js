import React, { useEffect, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import ResultsTable from '../components/ResultsTable';

const ZymoWebProductFilterPage = () => {
  const { results, isDataLoaded, loadZymoWebProducts } = useContext(SearchContext);

  useEffect(() => {
    loadZymoWebProducts();
  }, [loadZymoWebProducts]);

  return (
    <div className="zymo-web-product-filter-page">
      <h2>Zymo Web Products</h2>
      {isDataLoaded ? (
        results.length > 0 ? (
          <ResultsTable results={results} />
        ) : (
          <div>No products found.</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ZymoWebProductFilterPage;
