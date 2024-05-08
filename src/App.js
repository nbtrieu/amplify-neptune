// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';

import { NavBar } from './components';
import KeywordSearchPage from './pages/KeywordSearchPage.js';
import OrganizationSearchPage from './pages/OrganizationSearchPage.js';
import NameSearchPage from './pages/NameSearchPage.js';

Amplify.configure(config);

function App() {  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<KeywordSearchPage />} />
        <Route path='/organization' element={<OrganizationSearchPage />} />
        <Route path='/name' element={<NameSearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
