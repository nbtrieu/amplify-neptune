import './App.css';
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
