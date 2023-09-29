import React, { useState, useEffect } from "react";

/**
 *
 * @param {numero} numero - Número para inicializar el componente
 * @param {string} ClassName - texto para indicar la ClassName para adjuntar en css
 * @param {numero} limite - Número para indicar el final del crecimiento de "número"
 *
 * @returns Estructura HTML
 */

const CakeSum = ({ numero, limite, className }) => {
  const [suma, setSuma] = useState(numero);

  useEffect(() => {
    let acumulador = numero;

    const intervalID = setInterval(() => {
      if (acumulador <= limite) {
        acumulador++;
        setSuma(acumulador);
      } else {
        clearInterval(intervalID);
      }
    }, 0.5);

    return () => clearInterval(intervalID);
  }, [numero, limite]);

  return <span className={className}>{`$${suma}`}</span>;
};

export default CakeSum;
