import React from "react";
import "./DropdownItem.scss";
import Texto from "../../Texto/Texto.js";
import Icono from "../../Icono/Icono.jsx";

/**
 * 
 * @param {string} options - Array de objetos dentro de la data que conserva todos los iconos
 * 
 * @returns Estructura HTML
 */

const DropdownItem = ({ options }) => {
  return (
    <ul className="dropdown-list">
      {options.map((option, index) => (
        <div className="dropdown-item">
          <Texto
            label={option.label}
            size={"title-md"}
            color={"--color-subtitulo-lila"}
            key={index}
          />
          {option.icono && <Icono icono={option.icono} />}
        </div>
      ))}
    </ul>
  );
};

export default DropdownItem;
