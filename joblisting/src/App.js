import logo from './logo.svg';
import data from "../public/data.json";
import './App.css';

function App() {

  const [filterKeywords, setfilterKeywords] = useState([]);

  const addFilterKeywords= (data) => {
    if(!filterKeywords.includes(data))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
