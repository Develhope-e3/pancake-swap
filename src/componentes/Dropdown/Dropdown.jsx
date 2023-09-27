import Link from "../Link/Link";
import React, { useState } from "react";
/**
 * 
 * @param {string} label - Texto que va a llevar el encabezado del Dropdown
 * @param {componente} dropdownItem -Contenido Dropdown 
 * @param {string} href - URL del encabezado
 * @param {string} className - Clase del encabezado del Dropdown
 *
 * @returns Estructura HTML
 */

function Dropdown({dropdownItem, label , href, className}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
           <Link
        label={label}
        className={className}
        href={href}
      />
      {isOpen && (
     <ul>
      {dropdownItem}
     </ul>
      )}
    </div>
  );
}

export default Dropdown;
