import Link from "../Link/Link";
import React, { useState } from "react";
import DropdownItem from "./DropdownItems/DropdownItems.jsx";
import "./Dropdown.scss";

/**
 *
 * @param {string} label - Texto que va a llevar el encabezado del Dropdown
 * @param {componente} dropdownItems -Contenido Dropdown
 * @param {string} href - URL del encabezado
 * @param {string} className - Clase del encabezado del Dropdown
 *
 * @returns Estructura HTML
 */

const Dropdown = ({ dropdownItems, label, href, className, punto }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link label={label} className={className} href={href} />
        {isOpen && <DropdownItem options={dropdownItems} />}
        {punto && punto}
      </div>

  
    </>
  );
};

export default Dropdown;
