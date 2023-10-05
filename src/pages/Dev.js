import React from "react";
import { PrimaryCard } from "../componentes/Cards/PrimaryCard.js";
import { dataPrimaryCard } from "../data/dataPrimaryCard.js";
import { CardCTA } from "../componentes/Cards/CardCTA";
import { dataCardCTA } from "../data/dataCardCTA.js";
import { Button } from "../componentes/Button/Button.js";
import Link from "../componentes/Link/Link.js";
import Texto from "../componentes/Texto/Texto.js";
import Puntos from "../componentes/Puntos/Puntos.js";
import { GridComposer1 } from "../componentes/GridComposer/GridComposer.js";
import { WarningHeader } from "../componentes/WarningHeader/WarningHeader.js";
import Footer from "../componentes/Footer/Footer.js";
import "../styles/globals.scss";
import { ButtonScroll } from "../componentes/Button/ButtonScroll.js";
import { SlideBunny } from "../componentes/Slide-Bunny/SlideBunny.js";
import Navbar from "../componentes/Navbar/Navbar.jsx";

const Dev = () => {
  return (
    <div>
      <div className="flex-header">
        <WarningHeader />
        <Navbar />
      </div>
      <div className="flex-col-center">
        <Texto
          size={"title-lg-bold"}
          label={"title-lg-bold"}
          color={"var(--color-secondary)"}
        />
        <Texto
          size={"title-lg"}
          label={"title-lg"}
          color={"var(--color-secondary)"}
        />
        <Texto
          size={"title-md-bold"}
          label={"title-md-bold"}
          color={"var(--color-secondary)"}
        />
        <Texto
          size={"title-md"}
          label={"title-md"}
          color={"var(--color-secondary)"}
        />
        <Texto
          size={"title-s-bold"}
          label={"title-s-bold"}
          color={"var(--color-secondary)"}
        />
        <Texto
          size={"title-s"}
          label={"title-s"}
          color={"var(--color-secondary)"}
        />
        <Texto
          size={"title-xs-bold"}
          label={"title-xs-bold"}
          color={"var(--color-secondary)"}
        />
        <Texto
          size={"title-xs"}
          label={"title-xs"}
          color={"var(--color-secondary)"}
        />
        <Texto size={"body"} label={"body"} color={"var(--color-secondary)"} />
      </div>
      <br />
      <div className="flex-row-container">
        {dataPrimaryCard &&
          dataPrimaryCard.map((card, index) => {
            return (
              <PrimaryCard
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
                body={card.body}
                key={index}
              />
            );
          })}
        <Puntos className="punto-verde" />
        <Puntos className="punto-rosa" />
        {dataCardCTA &&
          dataCardCTA.map((card, index) => {
            return (
              <CardCTA
                style={card.style}
                icon={card.icon}
                prelude={card.prelude}
                title={card.title}
                subtitle={card.subtitle}
                body={card.body}
                button={card.button}
                onClick={card.onClick}
                key={index}
              />
            );
          })}
      </div>
      <br />
      <Button
        isNotHover
        texto={"Normal"}
        onClick={() => console.log("click en el boton normal")}
      />
      <Button
        isL
        texto={"Primary"}
        colorTexto={"var(--color-button-primary)"}
        onClick={() => console.log("click en el boton primario")}
      />
      <Button
        isM
        isSecondary
        texto={"Secondary"}
        colorTexto={"var(--color-primary)"}
        onClick={() => console.log("click en el boton secundario")}
      />
      <br />
      <Link
        label={"Learn"}
        className={"primary-anchor"}
        href={"www.google.es"}
        svg={
          <svg
            viewBox="0 0 24 24"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="anchorSVG">
            <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
          </svg>
        }></Link>
      <Link
        label={"Trade"}
        className={"navbar-anchor"}
        href={"www.google.es"}></Link>
      <Link
        label={"Birthday"}
        className={"navbar-anchor-bold"}
        href={"www.google.es"}></Link>
      <Link
        label={"Customer Support"}
        className={"footer-anchor"}
        href={"www.google.es"}></Link>
      <Link
        label={"Contact"}
        className={"footer-anchor-secondary"}
        href={"www.google.es"}></Link>
      <br />
      <br />
      <div>
        <GridComposer1
          className={"theme1"}
          col={3}
          remRowSpacing={2}
          remColSpacing={9}
        />
        <br />
        <br />
      </div>
      <SlideBunny />
      <ButtonScroll />
      <Footer />
      <br />
      <br />
    </div>
  );
};

export default Dev;
