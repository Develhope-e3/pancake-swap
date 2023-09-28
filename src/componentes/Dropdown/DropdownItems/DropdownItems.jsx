import React from "react";
import "./DropdownItem.scss";
import Texto from "../../Texto/Texto";
import Icono from "../../Icono/Icono";
const DropdownItem = ({ options, icono }) => {
  return (
    <ul className="dropdown-list">
      {options.map((option, index) => (
        <div className="dropdown-item" key={index}>
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
