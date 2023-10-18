import React from "react";
import "./DropdownItem.scss";
import Texto from "../../Texto/Texto.js";
import Icono from "../../Icono/Icono.jsx";
import classNames from "classnames";

/**
 * 
 * @param {string} options - Array de objetos dentro de la data que conserva todos los iconos
 * 
 * @returns Estructura HTML
 */

const DropdownItem = ({ options, isNetwork, isIdiomas }) => {

  const givenClassName = classNames({
    "dropdown-item": true,
    "dropdown-bnb": isNetwork,
    "dropdown-idiomas": isIdiomas,
    
  });
  return (
    <ul className={"dropdown-list"}>
      {options.map((option, index) => (
        <div className={givenClassName} key={index}>
          {option.iconoinicio && <Icono icono={option.iconoinicio}/>}
          <Texto
            label={option.label}
            size={"title-md"}
            color={"--color-subtitulo-lila"}
          />
          {option.icono && <Icono icono={option.icono} />}
          {option.punto && option.punto}
        </div>
      ))}
    </ul>
  );
};

export default DropdownItem;
