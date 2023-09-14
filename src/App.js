import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
<<<<<<< HEAD
import EjemploComponente from "./componentes/EjemploComponente/EjemploComponente";
import ButtonPrimary from "./componentes/BotonPrimary/ButtonPrimary";
=======
import PuntosVerdes from "./puntosVerdes/puntosVerdes";



>>>>>>> 4478762 (feat: cree el punto verde)
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

          <ButtonPrimary esPrimario={true} label={"button-wallet"} texto={"connect wallet"} onClick={()=> console.log("click en el boton connect wallet")} />

          <PuntosVerdes className="puntos-verdes" />

        </div>
      </header>
    </div>
  );
}

export default App;
