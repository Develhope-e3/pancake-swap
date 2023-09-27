import React from "react";
import "./DropdownItem.scss";
import Texto from "../../Texto/Texto";
import Icono from "../../Icono/Icono";
const DropdownItem = ({ options, icono }) => {
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
