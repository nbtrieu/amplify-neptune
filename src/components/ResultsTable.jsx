import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import CsvButton from './CsvButton';
import MUITable from './MUITable';
import { unparse } from 'papaparse';

import '../index.css';

const ResultsTable = () => {
    const { results } = useContext(SearchContext);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    console.log("***Data retrieved for results table:", results);
    
    if (!results || results.length === 0) {
        return <div className='no-results'>No results found.</div>;
    }

    // Dynamically generate columns based on the keys of the first result
    const columns = Object.keys(results[0]).map(key => ({
        id: key,
        label: key.replace(/_/g, ' ').toUpperCase(),
        minWidth: 150
    }));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const downloadCsv = () => {
        const csv = unparse(results);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'search-results.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="results-container">
            <div className="results-info mb-3">
                <div>{`${results.length} results found.`}</div>
                <div className="csv-button-container">
                    <CsvButton onClick={downloadCsv} />
                </div>
            </div>
            <MUITable
                columns={columns}
                rows={results}
                page={page}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default ResultsTable;
