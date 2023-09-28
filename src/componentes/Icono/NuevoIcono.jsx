import React from "react";

/**
 * @param {string} color - color asignado al icono
 * @param {JSX.Element} svg - SVG element o React-Icon
 * 
 * @returns Estructura HTML
 */

const NuevoIcono = (color, svg) => {
  return (
    <svg fill={color}>{svg && svg}</svg>
  );
};

export default NuevoIcono;
