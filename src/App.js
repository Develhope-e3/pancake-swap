import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./componentes/EjemploComponente/EjemploComponente";
import { PrimaryCard } from "./componentes/Cards/PrimaryCard.js";
import { cardData } from "./data/cardData.js";

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
          rel="noopener noreferrer">
          Learn React
        </a>
        <div className="flex-col-center">
          {/**
           * Manera de invocar a mi componente reutilizable
           */}
          <EjemploComponente
            esPrimario={true}
            texto={"Boton primario"}
            onClick={() => console.log("click en el boton primario")}
          />
          <EjemploComponente
            esPrimario={false}
            texto={"Boton secundario"}
            onClick={() => console.log("click en el boton secundario")}
          />
          <EjemploComponente
            esPrimario={false}
            disabled={true}
            onClick={() => console.log("click en el boton disabled")}
            texto={"Boton secundario"}
          />
        </div>
        <br />
        <div className="flex-row-container">
          {cardData.map((card) => {
            return (
              <PrimaryCard
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                body={card.body}
              />
            );
          })}
        </div>
        <br />
      </header>
    </div>
  );
}

export default App;
