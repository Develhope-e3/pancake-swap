import React from "react";
import "./ButtonPrimary.scss";

/**
 *
 * @param {string} className - texto para indicar la ClassName para adjuntar en css
 * @param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
 * @param {string} widthValue - valor para modificar el ancho del botón
 * @param {string} heightValue - valor para modificar el alto del botón
 * @param {string} texto - Texto que va a llevar el boton
 * @param {JSX.Element} svg - SVG element o Icon-React
 *
 * @returns Estructura HTML
 */

export const ButtonPrimary = ({
  className,
  onClick,
  widthValue,
  heightValue,
  texto,
  svg,
}) => {

  return (
    <button
      className={className}
      onClick={onClick}
      style={{ width: widthValue, height: heightValue }}>
      {texto}
      {svg && svg}
    </button>
  );
};

export default ButtonPrimary;
