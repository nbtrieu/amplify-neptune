import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import CsvButton from './CsvButton';
import { unparse } from 'papaparse';

import '../index.css';

const ResultsTable = () => {
    const { results } = useContext(SearchContext);
    console.log(results);
    
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
                            <th className="table-cell table-cell-uid">UUID</th>
                            <th className="table-cell table-cell-customer-id">CUSTOMER ID</th>
                            <th className="table-cell table-cell-name">FIRST NAME</th>
                            <th className="table-cell table-cell-name">LAST NAME</th>
                            <th className="table-cell table-cell-name">FULL NAME</th>
                            <th className="table-cell table-cell-email">EMAIL</th>
                            <th className="table-cell table-cell-phone">PHONE</th>
                            <th className="table-cell table-cell-title">TITLE</th>
                            <th className="table-cell table-cell-organization">ORGANIZATION</th>
                            <th className="table-cell table-cell-mailing-address">MAILING ADDRESS</th>
                            <th className="table-cell table-cell-interest-areas">AREAS OF INTEREST</th>
                            <th className="table-cell table-cell-lead-source">LEAD SOURCE</th>
                            <th className="table-cell table-cell-event-name">EVENT NAME</th>
                            <th className="table-cell table-cell-social-media">SOCIAL MEDIA</th>
                            <th className="table-cell table-cell-date-of-birth">DATE OF BIRTH</th>
                            <th className="table-cell table-cell-previous-titles">PREVIOUS TITLES</th>
                            <th className="table-cell table-cell-previous-organizations">PREVIOUS ORGANIZATIONS</th>
                            <th className="table-cell table-cell-tentative-organizations">TENTATIVE ORGANIZATIONS</th>
                            <th className="table-cell table-cell-purchasing-agent">PURCHASING AGENT</th>
                            <th className="table-cell table-cell-validated-lead-status">VALIDATED LEAD STATUS</th>
                            <th className="table-cell table-cell-status">STATUS</th>
                            <th className="table-cell table-cell-ingestion-tag">INGESTION TAG</th>
                            <th className="table-cell table-cell-data-source">DATA SOURCE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((item, index) => (
                            <tr key={index} className="table-row">
                                <td className="table-cell table-cell-uid">{item.uuid}</td>
                                <td className="table-cell table-cell-customer-id">{item.customer_id}</td>
                                <td className="table-cell table-cell-name">{item.first_name}</td>
                                <td className="table-cell table-cell-name">{item.last_name}</td>
                                <td className="table-cell table-cell-name">{item.full_name}</td>
                                <td className="table-cell table-cell-email">{item.email}</td>
                                <td className="table-cell table-cell-phone">{item.phone}</td>
                                <td className="table-cell table-cell-title">{item.title}</td>
                                <td className="table-cell table-cell-organization">{item.organization}</td>
                                <td className="table-cell table-cell-mailing-address">{item.mailing_address}</td>
                                <td className="table-cell table-cell-interest-areas">{item.interest_areas}</td>
                                <td className="table-cell table-cell-lead-source">{item.lead_source}</td>
                                <td className="table-cell table-cell-event-name">{item.event_name}</td>
                                <td className="table-cell table-cell-social-media">{item.social_media}</td>
                                <td className="table-cell table-cell-date-of-birth">{item.date_of_birth}</td>
                                <td className="table-cell table-cell-previous-titles">{item.previous_titles}</td>
                                <td className="table-cell table-cell-previous-organizations">{item.previous_organizations}</td>
                                <td className="table-cell table-cell-tentative-organizations">{item.tentative_organizations}</td>
                                <td className="table-cell table-cell-purchasing-agent">{item.purchasing_agent}</td>
                                <td className="table-cell table-cell-validated-lead-status">{item.validated_lead_status}</td>
                                <td className="table-cell table-cell-status">{item.status}</td>
                                <td className="table-cell table-cell-ingestion-tag">{item.ingestion_tag}</td>
                                <td className="table-cell table-cell-data-source">{item.data_source}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ResultsTable;
