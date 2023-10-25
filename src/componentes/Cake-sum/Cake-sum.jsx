import { useState, useEffect } from "react";

const CakeSum = ({ limite, className }) => {
  const [suma, setSuma] = useState(limite);

  useEffect(() => {
    let acumulador = limite - 793;

    const intervalID = setInterval(() => {
      if (acumulador < limite) {
        acumulador ++;
        setSuma(acumulador);
      } else {
        clearInterval(intervalID);
      }
    }, 0.5);

    return () => clearInterval(intervalID);
  }, [limite]);

  return <span className={className}>{`$${suma}`}</span>;
};

export default CakeSum;
