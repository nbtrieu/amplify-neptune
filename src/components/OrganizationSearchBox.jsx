import React, { useState, useContext, useCallback, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';
import { generateClient } from 'aws-amplify/api';
import organizationOptionsList from '../options/organizationOptions';

import SearchableDropdown from './SearchableDropdown';
import { CircularProgress } from '@mui/material';

export default function OrganizationSearchBox() {
  return (
    <div>OrganizationSearchBox</div>
  )
}
