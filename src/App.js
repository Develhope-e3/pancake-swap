import "./App.css";
import "./styles/index.scss";
import EjemploComponente from "./componentes/EjemploComponente/EjemploComponente";
import { PrimaryCard } from "./componentes/Cards/PrimaryCard.js";
import { cardData } from "./data/cardData.js";
import Link from "./componentes/Link/Link";
import Texto from "./componentes/Texto/Texto";
import Puntos from "./puntos/puntos";
import Button from "./componentes/Button/Button";

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
            size={"title-lg-bold"}
            label={"title-lg-bold"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-lg"}
            label={"title-lg"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-md-bold"}
            label={"title-md-bold"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-md"}
            label={"title-md"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-s-bold"}
            label={"title-s-bold"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-s"}
            label={"title-s"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-xs-bold"}
            label={"title-xs-bold"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-xs"}
            label={"title-xs"}
            color={"--color-secondary"}
          />
          <Texto size={"body"} label={"body"} color={"--color-secondary"} />
        </div>
        <br />
        <div className="flex-row-container">
          {cardData &&
            cardData.map((card) => {
              return (
                <PrimaryCard
                  icon={card.icon}
                  title={card.title}
                  subtitle={card.subtitle.text}
                  color={card.subtitle.color}
                  body={card.body}
                />
              );
            })}

          <Button
            esPrimario={true}
            label={"button-wallet"}
            texto={"connect wallet"}
            onClick={() => console.log("click en el boton connect wallet")}
          />

          <Puntos className="punto-verde" />
          <Puntos className="punto-rosa" />
        </div>
        <br />
      </header>
    </div>
  );
}

export default App;
