import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

import {
  NavBar,
  KeywordSearchBox,
  ResultsTable
} from './components'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <KeywordSearchBox/>
      <ResultsTable/>
    </div>
  );
}

export default App;
