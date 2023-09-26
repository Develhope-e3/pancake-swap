import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./componentes/EjemploComponente/EjemploComponente";
import Puntos from "./puntos/puntos";
import Button from "./componentes/Button/Button";
import { ButtonPrimary } from "./componentes/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "./componentes/ButtonSecondary/ButtonSecondary";


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

          <Button
            esPrimario={true}
            label={"button-wallet"}
            texto={"connect wallet"}
            onClick={() => console.log("click en el boton connect wallet")}
          />
          <ButtonPrimary
          className="button-primary"
          label={"button-primary"}
          texto={"primary"}
          onClick={()=>console.log("click en el boton primario")}
          />

          <ButtonSecondary
          className="button-secondary"
          label={"button-secondary"}
          texto={"secondary"}
          onClick={()=>console.log("click en el boton secundario")}
          />

          <Puntos className="punto-verde" />
          <Puntos className="punto-rosa" />
        </div>
      </header>
    </div>
  );
}

export default App;
