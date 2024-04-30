import './App.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';

import {
  NavBar,
  KeywordSearchBox,
  ResultsTable
} from './components'

import { SearchProvider } from './context/SearchContext.js';

Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchProvider>
        <KeywordSearchBox/>
        <ResultsTable/>
      </SearchProvider>
    </div>
  );
}

export default App;
