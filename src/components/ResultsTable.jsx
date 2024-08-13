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

    const columns = [
        { id: 'uuid', label: 'UUID', minWidth: 100 },
        { id: 'customer_id', label: 'Customer ID', minWidth: 150 },
        { id: 'first_name', label: 'First Name', minWidth: 150 },
        { id: 'last_name', label: 'Last Name', minWidth: 150 },
        { id: 'full_name', label: 'Full Name', minWidth: 200 },
        { id: 'email', label: 'Email', minWidth: 200 },
        { id: 'phone', label: 'Phone', minWidth: 150 },
        { id: 'title', label: 'Title', minWidth: 150 },
        { id: 'organization', label: 'Organization', minWidth: 200 },
        { id: 'mailing_address', label: 'Mailing Address', minWidth: 250 },
        { id: 'interest_areas', label: 'Areas Of Interest', minWidth: 200 },
        { id: 'lead_source', label: 'Lead Source', minWidth: 150 },
        { id: 'event_name', label: 'Event Name', minWidth: 200 },
        { id: 'social_media', label: 'Social Media', minWidth: 200 },
        { id: 'date_of_birth', label: 'Date Of Birth', minWidth: 150 },
        { id: 'previous_titles', label: 'Previous Titles', minWidth: 200 },
        { id: 'previous_organizations', label: 'Previous Organizations', minWidth: 200 },
        { id: 'tentative_organizations', label: 'Tentative Organizations', minWidth: 200 },
        { id: 'purchasing_agent', label: 'Purchasing Agent', minWidth: 200 },
        { id: 'validated_lead_status', label: 'Validated Lead Status', minWidth: 200 },
        { id: 'status', label: 'Status', minWidth: 150 },
        { id: 'ingestion_tag', label: 'Ingestion Tag', minWidth: 150 },
        { id: 'data_source', label: 'Data Source', minWidth: 150 },
    ];
    

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
