import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
import Puntos from "./puntos/puntos";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="flex-col-center">
          {/**
           * Manera de invocar a mi componente reutilizable
           */}

          <Puntos className="punto-verde" />
          <Puntos className="punto-rosa" />

        </div>
      </header>
    </div>
  );
}

export default App;
