import React from "react";
import "./ButtonPrimary.scss";

// @param {string} texto - Texto que va a llevar el boton
//  @param {Boolean} esPrimario - Boolean para indicar si el boton es primario o secundario
// @param {Boolean} disabled - Boolean para indicar si el boton esta desactivado
// @param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton

export const ButtonPrimary = ({ texto, esPrimario, onClick, label }) => {
  const className = esPrimario ? "primario" : "secundario";

  return (
    <button className={className} label={label} onclick={onClick}>
      {texto}
    </button>
  );
};

export default ButtonPrimary;
