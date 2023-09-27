import React from "react";
import "./DropdownItem.scss";
import Texto from "../../Texto/Texto";
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
          <p>Icono</p>
        </div>
      ))}
    </ul>
  );
};

export default DropdownItem;
