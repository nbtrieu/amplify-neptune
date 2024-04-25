import './App.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import {
  NavBar,
  KeywordSearchBox,
  ResultsTable
} from './components'

Amplify.configure(awsconfig);

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
