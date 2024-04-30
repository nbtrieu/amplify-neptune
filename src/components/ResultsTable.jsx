import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import CsvButton from './CsvButton';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden', // prevent the inner table from causing the container to scroll
    margin: '0px 20px 20px 20px',
    border: '1px solid #E0E0E0', // Thin border outline
    borderRadius: '10px'
  },
  resultsInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#F9F9F9', // Light background for the results info bar
    borderBottom: '1px solid #E0E0E0', // Border between info bar and table
  },
  table: {
    minWidth: '800px',
    overflow: 'auto', // enables scrolling
  },
  csvButtonContainer: {
  },
  tableHeader: {
    background: '#6FC2A9',
    color: 'white',
    fontWeight: 'bold',
    padding: '10px 20px',
  },
  tableRow: {
    borderBottom: '1px solid #E0E0E0',
  },
  tableCell: {
    padding: '10px 20px',
    textAlign: 'left'
  },
};

const ResultsTable = () => {
  const { results } = useContext(SearchContext);
  console.log('Rendering ResultsTable, results:', results);

  return (
    <div style={styles.container}>
      <div style={styles.resultsInfo}>
        <div>{`${results.length} results found.`}</div>
        <div style={styles.csvButtonContainer}>
          <CsvButton onClick={() => console.log('Downloading CSV')} />
        </div>
      </div>
      <div style={styles.table}>
        <table>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableCell}>NAME</th>
              <th style={styles.tableCell}>EMAIL</th>
              <th style={styles.tableCell}>PHONE</th>
              <th style={styles.tableCell}>TITLE</th>
              <th style={styles.tableCell}>ORGANIZATION</th>
              <th style={styles.tableCell}>MAILING ADDRESS</th>
              <th style={styles.tableCell}>AREAS OF INTEREST</th>
              <th style={styles.tableCell}>LEAD SOURCE</th>
              <th style={styles.tableCell}>EVENT NAME</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>{item.name}</td>
                <td style={styles.tableCell}>{item.email}</td>
                <td style={styles.tableCell}>{item.phone}</td>
                <td style={styles.tableCell}>{item.title}</td>
                <td style={styles.tableCell}>{item.organization}</td>
                <td style={styles.tableCell}>{item.mailing_address}</td>
                <td style={styles.tableCell}>{item.interest_areas}</td>
                <td style={styles.tableCell}>{item.lead_source}</td>
                <td style={styles.tableCell}>{item.event_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsTable;
