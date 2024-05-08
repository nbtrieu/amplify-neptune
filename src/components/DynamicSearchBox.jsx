import React, { useState, useContext, useCallback, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';
import { generateClient } from 'aws-amplify/api';
import { CircularProgress } from '@mui/material';

const DynamicSearchBox = ({ query, variableKey, options, title, description, InputComponent }) => {
    const { setResults, setIsDataLoaded } = useContext(SearchContext);
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = useCallback(async () => {
        setIsLoading(true);
        setIsDataLoaded(false);
        const variables = { [variableKey]: value };
        try {
            const client = generateClient();
            const result = await client.graphql({
                query: query,
                variables: variables
            });
            setResults(result.data[Object.keys(result.data)[0]]);
        } catch (error) {
            console.error(`Error searching:`, error);
        } finally {
            setIsLoading(false);
            setIsDataLoaded(true);
        }
    }, [value, query, variableKey, setIsDataLoaded, setResults]);

    useEffect(() => {
        if (value) {
            handleSubmit();
        }
    }, [value, handleSubmit]);

    return (
        <div className="searchbox-container">
            <div className="searchbox-title">{title}</div>
            <div className="searchbox-description">{description}</div>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <InputComponent
                    options={options}
                    value={value}
                    onChange={setValue}
                />
            )}
        </div>
    );
};

export default DynamicSearchBox;
