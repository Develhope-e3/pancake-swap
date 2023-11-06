import { useState, useEffect } from "react";

const CakeSum = ({ limite, className }) => {
  const [suma, setSuma] = useState(limite);

  useEffect(() => {
    let acumulador = limite - 300;

    const intervalID = setInterval(() => {
      if (acumulador < limite) {
        acumulador++;
        setSuma(acumulador.toLocaleString());
      } else {
        clearInterval(intervalID);
      }
    }, 30);

    return () => clearInterval(intervalID);
  }, [limite]);

  return <span className={className}>{`${suma}`}</span>;
};

export default CakeSum;
