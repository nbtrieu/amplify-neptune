import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import keywordOptionsList from '../options/keywordOptions';
import { searchByKeyword } from '../graphql/queries';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px 20px 50px 20px',
    margin: 'auto',
    width: '50%'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '18px',
    color: '#51565E',
    marginBottom: '20px',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    justifyContent: 'center', // Align children to the center
    width: '100%'
  },
  selectInput: {
    padding: '10px',
    marginRight: '10px', // Add right margin to create space between select and button
    fontSize: '16px',
    borderColor: '#E0E0E0',
    borderRadius: '4px',
    width: '43%', // Adjust the width if necessary
    boxSizing: 'border-box',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#000', // Use the appropriate color
    color: '#A2DFC1',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const KeywordSearchBox = () => {
  const [keyword, setKeyword] = useState(keywordOptionsList[0]);

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const client = generateClient()
      const result = await client.graphql({
        query: searchByKeyword,
        variables: { keyword: keyword }
      });
      console.log(result.data.searchByKeyword);
    } catch (error) {
      console.error('Error searching by keyword:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Search by keyword</div>
      <div style={styles.description}>
        Search for leads based on their area of interests
      </div>
      <form style={styles.searchBox} onSubmit={handleSubmit}>
        <select style={styles.selectInput} value={keyword} onChange={handleKeywordChange}>
          {keywordOptionsList.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default KeywordSearchBox;
