import React from "react";
import "./Button.scss";
import classNames from "classnames";
import Texto from "../Texto/Texto";

/**
 *
 * @param {Boolean} isNotHover - Texto para indicar si el botón no tiene Hover
 * @param {Boolean} isXs - Dimensión estandarizada extra-pequeña para botón 
 * @param {Boolean} isS - Dimensión estandarizada  pequeña para botón
 * @param {Boolean} isM - Dimensión estandarizada mediana para botón
 * @param {Boolean} isL - Dimensión estandarizada grande para botón
 * @param {Boolean} isSecondary - Texto para indicar si el botón es Secondary
 * @param {Boolean} isWarning - Texto para indicar si el botón es Warning
 * @param {Boolean} isSetting - Texto para indicar si el botón es Setting
 * @param {Boolean} isScroll - Texto para indicar si el botón es Scroll
 * @param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
 * @param {String} texto - Texto que va a llevar el boton
 * @param {String} colorTexto - Color del texto que va a llevar el boton
 * @param {JSX.Element} svg - SVG element o Icon-React
 *
 * @returns Estructura HTML
 */

export const Button = ({
  isNotHover,
  isXs,
  isS,
  isM,
  isL,
  isSecondary,
  isWarning,
  isSetting,
  isScroll,
  onClick,
  texto,
  colorTexto,
  svg,
}) => {
  const givenClassName = classNames({
    button: true,
    "button-not-hover": isNotHover,
    "button-xs": isXs,
    "button-s": isS,
    "button-m": isM,
    "button-l": isL,
    "button-secondary": isSecondary,
    "button-warning": isWarning,
    "button-setting": isSetting,
    "button-scroll": isScroll,
  });

  return (
    <button className={givenClassName} onClick={onClick}>
      {<Texto size={"text-button"} label={texto} color={`${colorTexto}`} />}
      {svg && svg}
    </button>
  );
};

export default Button;
