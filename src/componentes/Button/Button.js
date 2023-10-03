import React from "react";
import "./Button.scss";
import classNames from "classnames";
import Texto from "../Texto/Texto";

/**
 *
 * @param {Boolean} isPrimary - Texto para indicar si el botón es Primary
 * @param {Boolean} isSecondary - Texto para indicar si el botón es Secondary
 * @param {Boolean} isCTA - Texto para indicar si el botón es CTA
 * @param {Boolean} isWallet - Texto para indicar si el botón es Wallet
 * @param {Boolean} isWarning - Texto para indicar si el botón es Warning
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
  isPrimary,
  isSecondary,
  isWarning,
  isSetting,
  onClick,
  widthValue,
  heightValue,
  texto,
  colorTexto,
  svg,
}) => {
  const givenClassName = classNames({
    button: true,
    "button-primary": isPrimary,
    "button-secondary": isSecondary,
    "button-warning": isWarning,
    "": isSetting,
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
