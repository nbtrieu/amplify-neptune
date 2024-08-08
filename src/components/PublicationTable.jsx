import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import CsvButton from './CsvButton';
import { unparse } from 'papaparse';

import '../index.css';

const PublicationTable = () => {
    const { results } = useContext(SearchContext);
    console.log("***Data retrieved for results table:", results);
    
    if (!results || results.length === 0) {
        return <div className='no-results'>No results found.</div>;
    }

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
            <div className="table-container">
                <table>
                    <thead className="table-header">
                        <tr className="table-header">
                            <th className="table-cell table-cell-uuid">UUID</th>
                            <th className="table-cell table-cell-title">Title</th>
                            <th className="table-cell table-cell-abstract">Abstract</th>
                            <th className="table-cell table-cell-publication-date">Publication Date</th>
                            <th className="table-cell table-cell-publication-type">Publication Type</th>
                            <th className="table-cell table-cell-source-name">Source Name</th>
                            <th className="table-cell table-cell-volume">Volume</th>
                            <th className="table-cell table-cell-issue">Issue</th>
                            <th className="table-cell table-cell-start-page">Start Page</th>
                            <th className="table-cell table-cell-end-page">End Page</th>
                            <th className="table-cell table-cell-doi">DOI</th>
                            <th className="table-cell table-cell-url">URL</th>
                            <th className="table-cell table-cell-citations">Citations</th>
                            <th className="table-cell table-cell-keywords">Keywords</th>
                            <th className="table-cell table-cell-notes">Notes</th>
                            <th className="table-cell table-cell-references">References</th>
                            <th className="table-cell table-cell-affiliations">Affiliations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((item, index) => (
                            <tr key={index} className="table-row">
                                <td className="table-cell table-cell-uuid">{item.uuid}</td>
                                <td className="table-cell table-cell-title">{item.title}</td>
                                <td className="table-cell table-cell-abstract" style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    <div className="tooltip">
                                        <span className="tooltiptext">
                                            {item.abstract}
                                        </span>
                                        {item.abstract}
                                    </div>
                                </td>
                                <td className="table-cell table-cell-publication-date">{item.publication_date}</td>
                                <td className="table-cell table-cell-publication-type">{item.publication_type}</td>
                                <td className="table-cell table-cell-source-name">{item.source_name}</td>
                                <td className="table-cell table-cell-volume">{item.volume}</td>
                                <td className="table-cell table-cell-issue">{item.issue}</td>
                                <td className="table-cell table-cell-start-page">{item.start_page}</td>
                                <td className="table-cell table-cell-end-page">{item.end_page}</td>
                                <td className="table-cell table-cell-doi">{item.doi}</td>
                                <td className="table-cell table-cell-url"><a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a></td>
                                <td className="table-cell table-cell-citations">{item.citations}</td>
                                <td className="table-cell table-cell-keywords">{item.keywords.join(', ')}</td>
                                <td className="table-cell table-cell-notes">{item.notes}</td>
                                <td className="table-cell table-cell-references" style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    <div className="tooltip">
                                        <span className="tooltiptext">
                                            {item.references.join(', ')}
                                        </span>
                                        {item.references.slice(0, 3).join(', ')}{item.references.length > 3 ? '...' : ''}
                                    </div>
                                </td>
                                <td className="table-cell table-cell-affiliations" style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    <div className="tooltip">
                                        <span className="tooltiptext">
                                            {item.affiliations.map((affiliation, idx) => (
                                                <div key={idx}>
                                                    <strong>Author:</strong> {affiliation.author} <br />
                                                    <strong>Affiliation:</strong> {affiliation.affiliation} <br />
                                                    <strong>Email:</strong> {affiliation.email || 'N/A'} <br />
                                                    <strong>Equal Contribution:</strong> {affiliation.equal_contribution ? 'Yes' : 'No'} <br />
                                                    <strong>First Author:</strong> {affiliation.first_author ? 'Yes' : 'No'} <br />
                                                    <strong>Second Author:</strong> {affiliation.second_author ? 'Yes' : 'No'} <br />
                                                    <br />
                                                </div>
                                            ))}
                                        </span>
                                        {item.affiliations.map((affiliation, idx) => (
                                            <span key={idx}>{affiliation.author}{idx < item.affiliations.length - 1 ? ', ' : ''}</span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PublicationTable;
