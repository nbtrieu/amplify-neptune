import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import CsvButton from './CsvButton';
import { unparse } from 'papaparse';

import '../index.css';

const ResultsTable = () => {
    const { results } = useContext(SearchContext);

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
                        <tr>
                            <th className="table-cell">NAME</th>
                            <th className="table-cell">EMAIL</th>
                            <th className="table-cell">PHONE</th>
                            <th className="table-cell">TITLE</th>
                            <th className="table-cell">ORGANIZATION</th>
                            <th className="table-cell">MAILING ADDRESS</th>
                            <th className="table-cell">AREAS OF INTEREST</th>
                            <th className="table-cell">LEAD SOURCE</th>
                            <th className="table-cell">EVENT NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((item, index) => (
                            <tr key={index} className="table-row">
                                <td className="table-cell">{item.name}</td>
                                <td className="table-cell">{item.email}</td>
                                <td className="table-cell">{item.phone}</td>
                                <td className="table-cell">{item.title}</td>
                                <td className="table-cell">{item.organization}</td>
                                <td className="table-cell">{item.mailing_address}</td>
                                <td className="table-cell">{item.interest_areas}</td>
                                <td className="table-cell">{item.lead_source}</td>
                                <td className="table-cell">{item.event_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultsTable;
