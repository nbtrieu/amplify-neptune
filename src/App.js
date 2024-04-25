import './App.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';

import {
  NavBar,
  KeywordSearchBox,
  ResultsTable
} from './components'

Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <NavBar/>
      <KeywordSearchBox/>
      {/* <ResultsTable/> */}
    </div>
  );
}

export default App;
