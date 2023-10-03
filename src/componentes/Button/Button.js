import React from "react";
import "./Button.scss";
import classNames from "classnames";

/**
 *
 * @param {boolean} isPrimary - Texto para indicar si el botón es Primary o Secondary
 * @param {string} className - Texto para elegir el ClassName para adjuntar en css
 * @param {Callback} onClick - Callback que se ejecuta cada vez que el usuario hace click en el boton
 * @param {string} widthValue - Valor para modificar el ancho del botón
 * @param {string} heightValue - Valor para modificar el alto del botón
 * @param {string} texto - Texto que va a llevar el boton
 * @param {string} sizeTexto - Tamaño del texto según la className del componente Texto
 * @param {string} colorTexto - Color del texto que va a llevar el boton
 * @param {JSX.Element} svg - SVG element o Icon-React
 *
 * @returns Estructura HTML
 */

/**
 *
 * TODO -> refactorizar buttons agregando el componente TEXTO
 * ? Cómo hacemos?
 * ! Ayuda
 *
 */

export const Button = ({
  isPrimary,
  isSetting,
  isWallet,
  onClick,
  widthValue,
  heightValue,
  texto,
  svg,
}) => {
  const givenClassName = classNames({
    "button-primary": isPrimary,
    "button-secondary": !isPrimary,
    "button-setting": isSetting,
    "button-wallet": isWallet,
  });

  return (
    <button
      className={classNames(givenClassName)}
      onClick={onClick}
      style={{ width: widthValue, height: heightValue }}
    >
      {texto && texto}
      {svg && svg}
    </button>
  );
};

export default Button;
