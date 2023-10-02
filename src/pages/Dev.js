import React from "react";
import { PrimaryCard } from "../componentes/Cards/PrimaryCard.js";
import { dataPrimaryCard } from "../data/dataPrimaryCard.js";
import { CardCTA } from "../componentes/Cards/CardCTA";
import { dataCardCTA } from "../data/dataCardCTA.js";
import { Button } from "../componentes/Button/Button.js";
import Link from "../componentes/Link/Link.js";
import Texto from "../componentes/Texto/Texto.js";
import Puntos from "../componentes/Puntos/Puntos.js";
import Dropdown from "../componentes/Dropdown/Dropdown.jsx";
import {
  earn,
  trade,
  win,
  game,
  birthday,
  tresPuntos,
  idiomas,
} from "../data/dropdownItems.js";
import { BsThreeDots } from "react-icons/bs";
import Icono from "../componentes/Icono/Icono.jsx";
import PancakeSwapIcono from "../componentes/Icono/PancakeSwapIcono.jsx";
import { TbWorld } from "react-icons/tb";
import {
  GridComposer1,
  GridComposer2,
} from "../componentes/GridComposer/GridComposer.js";
import { WarningHeader } from "../componentes/WarningHeader/WarningHeader.js";
import Footer from "../componentes/Footer/Footer.js";
import ArrowUp from "../assets/iconos/ArrowUp.jsx";

const Dev = () => {
  return (
    <div>
      <div className="flex-header">
        <WarningHeader />
      </div>
      <div className="flex-col-center">
        {/**
         * Manera de invocar a mi componente reutilizable
         */}
        <div className="flex-row">
          <div className="pancakeswap-icon">
            <Icono icono={<PancakeSwapIcono />} />
          </div>
          <Dropdown
            label={"Trade"}
            dropdownItems={trade}
            punto={<Puntos className="punto-rosa" />}
          />
          <Dropdown label={"Earn"} dropdownItems={earn} />
          <Dropdown label={"Win"} dropdownItems={win} />
          <Dropdown label={"Game"} dropdownItems={game} />
          <Dropdown
            label={"Birthday"}
            dropdownItems={birthday}
            punto={<Puntos className="punto-verde" />}
            className={"birthday"}
          />
          <Dropdown
            label={<BsThreeDots />}
            dropdownItems={tresPuntos}
            punto={<Puntos className="punto-verde" />}
            className={"three-dots"}
          />
          <Dropdown
            label={<TbWorld />}
            dropdownItems={idiomas}
            className={"idiomas"}
          />
        </div>
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
        <Texto size={"title-s"} label={"title-s"} color={"--color-secondary"} />
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
        isPrimary={true}
        className={"button-wallet"}
        texto={"Connect Wallet"}
        onClick={() => console.log("click en el boton connect wallet")}
      />
      <Button
        isPrimary={true}
        className={"button-primary"}
        texto={"primary"}
        onClick={() => console.log("click en el boton primario")}
      />
      <Button
        isPrimary={false}
        className="button-secondary"
        texto={"secondary"}
        onClick={() => console.log("click en el boton secundario")}
      />
      <br />
      <Puntos className="punto-verde" />
      <Puntos className="punto-rosa" />
      <br></br>
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
        <GridComposer2 className={"theme2"} col={5} />
        <br />
      </div>
      <Footer />
      <div className="flex-sidebuton">
        <Button
          isPrimary={true}
          widthValue={"50px"}
          heightValue={"50px"}
          svg={<ArrowUp />}
        />
      </div>
    </div>
  );
};

export default Dev;
