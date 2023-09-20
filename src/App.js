import logo from "./logo.svg";
import "./App.css";
import { PrimaryCard } from "./components/primary-card.js";
import { cardData } from "./data/cardData.js";

function App() {
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
      <div>
        <PrimaryCard
          className="primaryCard"
          icon={cardData.map((element) => element.icon)}
          title={cardData.map((element) => element.title)}
          subtitle={cardData.map((element) => element.subtitle)}
        />
      </div>
    </div>
  );
}

export default App;
