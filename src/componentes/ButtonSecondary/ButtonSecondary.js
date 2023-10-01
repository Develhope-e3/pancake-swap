import React from "react";
import "./ButtonSecondary.scss";

/**
 *
 * @param {string} texto - Texto que va a llevar el boton
 * @param {string} ClassName - texto para indicar la ClassName para adjuntar en css
 * @param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
 *
 * @returns Estructura HTML
 */

export const ButtonSecondary = ({ texto, onClick, svg, className }) => {
  //   const className = esPrimario ? "primario" : "secundario";

  return (
    <button className={className} onClick={onClick}>
      {texto}
      {svg && svg}
    </button>
  );
};

export default ButtonSecondary;
