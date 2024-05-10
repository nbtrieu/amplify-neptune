import React, { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';
import ResultsTable from './ResultsTable';
import ResultsGraph from './ResultsGraph';

const transformData = (rawNodes) => {
  return {
    nodes: rawNodes.map(node => ({
      id: 'PERSON:' + node.uid,
      name: node.name,
      uid: node.uid,
      label: 'person', // Assuming all results are persons
      color: null // This will be set by getNodeColor function in the component
    })),
    links: [] // Populate links appropriately if available
  };
};

const SearchResultComponent = ({ SearchBoxComponent, searchProps }) => {
  const { isDataLoaded, results } = useContext(SearchContext);
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    if (results.length > 0) {
      console.log("Results for Transformation:", results);
      const transformedData = transformData(results);
      console.log("Transformed Graph Data:", transformedData);
      setGraphData(transformedData);
    }
  }, [results]);

  return (
    <>
      <SearchBoxComponent {...searchProps} />
      {isDataLoaded ? (
        <>
          <ResultsTable />
          <div className="force-graph-container">
            <ResultsGraph nodes={graphData.nodes} links={graphData.links} />
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SearchResultComponent;
