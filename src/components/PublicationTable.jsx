import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import CsvButton from './CsvButton';
import MUITable from './MUITable';
import { unparse } from 'papaparse';

import '../index.css';

const PublicationTable = () => {
    const { results } = useContext(SearchContext);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    console.log("***Data retrieved for results table:", results);
    
    if (!results || results.length === 0) {
        return <div className='no-results'>No results found.</div>;
    }

    const columns = [
        { id: 'uuid', label: 'UUID', minWidth: 100 },
        { id: 'title', label: 'TITLE', minWidth: 170 },
        {
            id: 'affiliations',
            label: 'AFFILIATIONS',
            minWidth: 200,
            format: (affiliations) => affiliations.join(', '),
        },
        { id: 'publication_date', label: 'PUBLICATION DATE', minWidth: 170 },
        { id: 'publication_type', label: 'PUBLICATION TYPE', minWidth: 150 },
        { id: 'source_name', label: 'SOURCE NAME', minWidth: 170 },
        { id: 'volume', label: 'VOLUME', minWidth: 100 },
        { id: 'issue', label: 'ISSUE', minWidth: 100 },
        { id: 'start_page', label: 'START PAGE', minWidth: 120 },
        { id: 'end_page', label: 'END PAGE', minWidth: 120 },
        { id: 'doi', label: 'DOI', minWidth: 150 },
        {
            id: 'url',
            label: 'URL',
            minWidth: 150,
            align: 'center',
            format: (url) => (
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                </a>
            ),
        },
        { id: 'citations', label: 'CITATIONS', minWidth: 120 },
        {
            id: 'keywords',
            label: 'KEYWORDS',
            minWidth: 200,
            format: (keywords) => keywords.join(', '),
        },
        { id: 'notes', label: 'NOTES', minWidth: 200 },
        {
            id: 'abstract',
            label: 'ABSTRACT',
            minWidth: 300,
            align: 'left',
            format: (abstract) => (
                <div style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {abstract}
                </div>
            ),
        },
        {
            id: 'references',
            label: 'REFERENCES',
            minWidth: 300,
            align: 'left',
            format: (references) => references.join('\n'),
        },
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
            <div className="results-info">
                <div>{`${results.length} results found.`}</div>
                <div className="csv-button-container">
                    <CsvButton onClick={downloadCsv} />
                </div>
            </div>
            <MUITable
                columns={columns}
                rows={results.map(result => ({
                    ...result,
                    affiliations: result.affiliations.map(a => a.author).join(', '), // Convert affiliations to a string
                    references: result.references.join('\n'), // Convert references to a string with line breaks
                }))}
                page={page}
                rowsPerPage={rowsPerPage}
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default PublicationTable;
