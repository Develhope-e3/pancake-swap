import React from "react";
import "./Button.scss";

/**
 *
 * @param {string} texto - Texto que va a llevar el boton
 * @param {Boolean} esPrimario - Boolean para indicar si el boton es primario o secundario
 * @param {Boolean} disabled - Boolean para indicar si el boton esta desactivado
 * @param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
 * @param {JSX.Element} svg - Elemento SVG o Icono de react-icons
 *
 * @returns Estructura HTML
 */

export const Button = ({ texto, esPrimario, onClick, svg }) => {
  const className = esPrimario ? "primario" : "secundario";

  return (
    <button className={className} onclick={onClick}>
      {texto}
      {svg && svg}
    </button>
  );
};

export default Button;
