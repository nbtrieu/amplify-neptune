// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';

import { NavBar } from './components';
import KeywordSearchPage from './pages/KeywordSearchPage.js';
import OrganizationSearchPage from './pages/OrganizationSearchPage.js';
import NameSearchPage from './pages/NameSearchPage.js';
import PublicationProductSearchPage from './pages/PublicationProductSearchPage.js';
import CombinedKeywordSearchPage from './pages/CombinedKeywordSearchPage.js';

import '@aws-amplify/ui-react/styles.css';

Amplify.configure(config);

function App() {
  return (
    <Router>
      <Authenticator className='mt-7'>
        {({ signOut, user }) => {
          // Redirect user to the login page if not signed in
          if (!user) return <Navigate to="/auth" replace />;
          
          // Return main app if user is signed in
          return (
            <>
              <NavBar signOut={signOut} />
              <Routes>
                <Route path='/' element={<KeywordSearchPage />} />
                <Route path='/organization' element={<OrganizationSearchPage />} />
                <Route path='/name' element={<NameSearchPage />} />
                <Route path='/publication-product' element={<PublicationProductSearchPage />} />
                <Route path='/combined-keyword' element={<CombinedKeywordSearchPage />} />
                <Route path='/auth' element={<></>} />
              </Routes>
            </>
          );
        }}
      </Authenticator>
    </Router>
  );
}

export default App;
