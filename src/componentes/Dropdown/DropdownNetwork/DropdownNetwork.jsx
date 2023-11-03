import "./DropdownNetwork.scss";
import { useState } from "react";
import DropdownItem from "../DropdownItems/DropdownItems";
import Icono from "../../Icono/Icono";
import Link from "../../Link/Link";

/**
 *
 * @param {string} label - Texto que va a llevar el encabezado del Dropdown
 * @param {componente} dropdownItems -Contenido Dropdown
 * @param {string} href - URL del encabezado
 * @param {string} className - Clase del encabezado del Dropdown
 * @param {componente} icono - Icono
 *
 * @returns Estructura HTML
 */

const DropdownNetwork = ({
  dropdownItems,
  label,
  href,
  className,
  icono1,
  icono2,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icono icono={icono1} className="bnb-icon" />
      <Link
        label={label}
        className={className}
        href={href}
        svg={<Icono icono={icono2} />}
      />

      {isOpen && <DropdownItem options={dropdownItems} isNetwork={true} />}
    </div>
  );
};
export default DropdownNetwork;
