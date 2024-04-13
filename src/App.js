import logo from './logo.svg';
import './App.css';
import {
  KeywordSearchBox,
  NavBarHeader 
} from './ui-components';

function App() {
  return (
    <div className="App">
      <NavBarHeader />
      <KeywordSearchBox />
    </div>
  );
}

export default App;
