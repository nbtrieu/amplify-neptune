import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import CsvButton from './CsvButton';
import MUITable from './MUITable';
import BasicPopover from './BasicPopover';
import { unparse } from 'papaparse';

import '../index.css';

const PublicationTable = () => {
    const { results } = useContext(SearchContext);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
            format: (affiliations) => {
                console.log('Affiliations:', affiliations);  // Debugging: Log the affiliations data
                
                const fullAuthors = Array.isArray(affiliations)
                    ? affiliations.map(a => `${a.author}`).join(', ')
                    : 'No affiliations available';

                return (
                    <BasicPopover
                        preview={fullAuthors && fullAuthors.length > 100 ? `${fullAuthors.substring(0, 100)}...` : fullAuthors}
                        fullText={fullAuthors}
                    />
                )
            },
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
            align: 'left',
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
            format: (keywords) => Array.isArray(keywords) ? keywords.join(', ') : 'No keywords available',
        },
        { id: 'notes', label: 'NOTES', minWidth: 200 },
        {
            id: 'abstract',
            label: 'ABSTRACT',
            minWidth: 300,
            align: 'left',
            format: (abstract) => (
                <BasicPopover
                    preview={abstract && abstract.length > 100 ? `${abstract.substring(0, 100)}...` : abstract}
                    fullText={abstract}
                />
            ),
        },
        {
            id: 'references',
            label: 'REFERENCES',
            minWidth: 300,
            align: 'left',
            format: (references) => (
                <BasicPopover
                    preview={
                        Array.isArray(references) && references.length > 2
                        ? `${references.slice(0, 2).join(', ')}...`
                        : Array.isArray(references) ? references.join(', ') : 'No references available'
                    }
                    fullText={Array.isArray(references) ? references.join('\n') : 'No references available'}
                />
            ),
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
                    // affiliations: result.affiliations.map(a => a.author).join(', '),
                    references: result.references,  // references passed directly
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
