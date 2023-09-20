import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./componentes/EjemploComponente/EjemploComponente";
import { PrimaryCard } from "./componentes/Card/PrimaryCard.js";
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

        <div className="flex-row-container">
          <PrimaryCard
            className="primary-card"
            iconClassName="primary-card-icon"
            icon={cardData.map((element, index) =>
              index === 0 ? element.icon : null,
            )}
            title={cardData.map((element, index) =>
              index === 0 ? element.title : null,
            )}
            subtitle={cardData.map((element, index) =>
              index === 0 ? element.subtitle : null,
            )}
            body={cardData.map((element, index) =>
              index === 0 ? element.body : null,
            )}
          />
          <PrimaryCard
            className="primary-card"
            iconClassName="primary-card-icon"
            icon={cardData.map((element, index) =>
              index === 1 ? element.icon : null,
            )}
            title={cardData.map((element, index) =>
              index === 1 ? element.title : null,
            )}
            subtitle={cardData.map((element, index) =>
              index === 1 ? element.subtitle : null,
            )}
            body={cardData.map((element, index) =>
              index === 1 ? element.body : null,
            )}
          />
          <PrimaryCard
            className="primary-card"
            iconClassName="primary-card-icon"
            icon={cardData.map((element, index) =>
              index === 2 ? element.icon : null,
            )}
            title={cardData.map((element, index) =>
              index === 2 ? element.title : null,
            )}
            subtitle={cardData.map((element, index) =>
              index === 2 ? element.subtitle : null,
            )}
            body={cardData.map((element, index) =>
              index === 2 ? element.body : null,
            )}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
