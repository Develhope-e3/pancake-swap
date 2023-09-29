import React, { useState, useEffect } from "react";

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
