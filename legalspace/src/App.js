import logo from './logo.svg';
import './App.css';
import NarBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NarBar/>

      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>*/}
      
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/Esetipazo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Pablo Belmar A.
        </a>
      </header>
    </div>
  );
}

export default App;
