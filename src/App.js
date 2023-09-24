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
            size={"title-large-bold"}
            label={"title-large-bold"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-large"}
            label={"title-large"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-medium-bold"}
            label={"title-medium-bold"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-medium"}
            label={"title-medium"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-small-bold"}
            label={"title-small-bold"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-small"}
            label={"title-small"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-extra-small-bold"}
            label={"title-extra-small-bold"}
            color={"--color-secondary"}
          />
          <Texto
            size={"title-extra-small"}
            label={"title-extra-small"}
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
                  subtitleColor={card.subtitle.color}
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
