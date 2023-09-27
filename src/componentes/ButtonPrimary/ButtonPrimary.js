import React from "react";
import "./ButtonPrimary.scss";

/**
 *
 * @param {string} texto - Texto que va a llevar el boton
 * @param {string} className - texto para indicar la ClassName para adjuntar en css
 * @param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
 * @param {JSX.Element} svg - SVG element o Icon-React
 * @param {string} color - color asignado al botón
 * 
 * @returns Estructura HTML
 */

export const ButtonPrimary = ({ texto, onClick, className, svg, color }) => {
//   const className = esPrimario ? "primario" : "secundario";

  return (
    <button className={className} onclick={onClick}>
      {texto}
      {color}
      {svg && svg}
    </button>
  );
};

export default ButtonPrimary;
