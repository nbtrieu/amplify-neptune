import React, { useState, useContext, useCallback, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';
import { generateClient } from 'aws-amplify/api';
import organizationOptionsList from '../options/organizationOptions';
import { searchByOrganization } from '../graphql/queries';

import SearchableDropdown from './SearchableDropdown';
import { CircularProgress } from '@mui/material';

export default function OrganizationSearchBox() {
    const { setResults, setIsDataLoaded } = useContext(SearchContext);
    const [organization, setOrganization] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSubmit = useCallback(async () => {
      setIsLoading(true);
      setIsDataLoaded(false);
      try {
        const client = generateClient();
        const result = await client.graphql({
          query: searchByOrganization,
          variables: { organization: organization }
        });
        setResults(result.data.searchByOrganization);
      } catch (error) {
        console.error('Error searching by organization:', error);
      } finally {
        setIsLoading(false);
        setIsDataLoaded(true);
      }
    }, [organization, setIsDataLoaded, setResults]);
  
    useEffect(() => {
      if (organization) {
        handleSubmit();
      }
    }, [organization, handleSubmit]);
  
    return (
      <div className="searchbox-container">
        <div className="searchbox-title">Search by organization</div>
        <div className="searchbox-description">Search for organization members</div>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <SearchableDropdown 
            options={organizationOptionsList} 
            value={organization} 
            onChange={setOrganization}
          />
        )}
      </div>
    );
}
