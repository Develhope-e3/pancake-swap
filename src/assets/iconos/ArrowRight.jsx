import React from "react";

/**
 * @param {string} color - color asignado al icono
 * @param {JSX.Element} svg - SVG element o React-Icon
 *
 * @returns Estructura HTML
 */

const ArrowRight = ({ color }) => {
  return (
    <svg
      fill={color}
      viewBox="0 -7 33 33"
      ml="4px"
      color="invertedContrast"
      width="30px"
      xmlns="http://www.w3.org/2000/svg"
      className="sc-bcPKhP ysQgM">
      <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
    </svg>
  );
};

export default ArrowRight;
