import React from "react";
import "./Button.scss";
import classNames from "classnames";
import Texto from "../Texto/Texto";

/**
 *
 * @param {Boolean} isNotHover - Texto para indicar si el botón no tiene Hover
 * @param {Boolean} isSecondary - Texto para indicar si el botón es Secondary
 * @param {Boolean} isWarning - Texto para indicar si el botón es Warning
 * @param {Boolean} isSetting - Texto para indicar si el botón es Setting
 * @param {Boolean} isScroll - Texto para indicar si el botón es Scroll
 * @param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
 * @param {String} widthValue - Valor para modificar el ancho del botón
 * @param {String} heightValue - Valor para modificar el alto del botón
 * @param {String} texto - Texto que va a llevar el boton
 * @param {String} colorTexto - Color del texto que va a llevar el boton
 * @param {JSX.Element} svg - SVG element o Icon-React
 *
 * @returns Estructura HTML
 */

export const Button = ({
  isNotHover,
  isSecondary,
  isWarning,
  isSetting,
  isScroll,
  onClick,
  widthValue,
  heightValue,
  texto,
  colorTexto,
  svg,
}) => {
  const givenClassName = classNames({
    button: true,
    "button-not-hover": isNotHover,
    "button-secondary": isSecondary,
    "button-warning": isWarning,
    "button-setting": isSetting,
    "button-scroll": isScroll,
  });

  return (
    <button
      className={givenClassName}
      onClick={onClick}
      style={{ width: widthValue, height: heightValue }}>
      {<Texto size={"text-button"} label={texto} color={`${colorTexto}`} />}
      {svg && svg}
    </button>
  );
};

export default Button;
