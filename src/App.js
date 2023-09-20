import logo from "./logo.svg";
import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./componentes/EjemploComponente/EjemploComponente";
import Link from "./componentes/Link/Link";
import Texto from "./componentes/Texto/Texto";
import { CardsData } from "./data/Cards";
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Link
            label={"Un link"}
            className={"primary"}
            href={"https://facebook.com"}
          />
          <Texto
            size={"title-large"}
            label={"Texto"}
            color={"--color-subtitulo-lila"}
          />
          <Texto
            size={"title-large"}
            label={"Texto"}
            color={"--color-secondary"}
          />

          {CardsData &&
            CardsData.map((card) => (
              <div className="card">
                <Texto label={card.titulo} size={"title-large-bold"} />
                <Texto label={card.subitulo} size={"title-large-bold"} />
                <Texto label={card.body} size={"title-large-bold"} />
              </div>
            ))}
        </div>
      </header>
    </div>
  );
}

export default App;
